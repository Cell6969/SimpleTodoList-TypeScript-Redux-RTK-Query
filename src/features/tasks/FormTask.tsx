import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Task } from "../../model/Task";
import { useCreateTaskMutation } from "../../stores/api/taskApi";
import { useUpdateTaskMutation } from "../../stores/api/taskApi";
import { FC, useEffect } from "react";

interface Props { //Buat interface untuk otomatis close modal
  onSuccess: () => void
  task?: Task
  formType?: string //Untuk membedakan mana form add sama edit
}
const FormTasks: FC<Props> = ({ onSuccess, task, formType }) => {
  const schema = yup.object().shape({ //Tambahkan Validator Schema
    task_name: yup.string().required().label("Task Name"),
    task_description: yup.string().required().label("Task Description")
  });

  const defaultValueTask: Task = { //Set default value
    task_name: "",
    task_description: ""
  }

  const {                   //untuk useform
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    setValue,
    getValues
  } = useForm({
    defaultValues: defaultValueTask,
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const [createTask, { data, isSuccess, isLoading, isError }] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  useEffect(() => {
    if (task) {
      setValue("task_name", task.task_name)
      setValue("task_description", task.task_description);
    }
  }, [task])

  const submitHandler = (v: Task) => { //Buat fungsi submit button
    if (formType === 'update') {
      if (task) {
        updateTask({ id: task.id, data: v }).then(() => {
          onSuccess();
        })
      }
    } else {
      createTask(v).then(() => {
        onSuccess();
      })
    }
  }

  return (
    <>
      <Card>
        <CardBody>
          <FormControl isInvalid={"task_name" in errors}> {/* Jika ada error */}
            <FormLabel>Nama Task</FormLabel>
            <Input placeholder="nama task ...." {...register("task_name")} /> {/* Masukkan Form Hook */}
            <FormHelperText color={"red.400"}>{errors.task_name?.message}</FormHelperText>
          </FormControl>
          <FormControl isInvalid={"task_name" in errors}>
            <FormLabel>Deskripsi</FormLabel>
            <Textarea placeholder="deskripsi task ..." rows={3} {...register("task_description")} /> {/* Masukkan Form Hook */}
            <FormHelperText color={"red.400"}>{errors.task_description?.message}</FormHelperText>
          </FormControl>
          <Button mt={5} bg={"green.400"} onClick={handleSubmit(submitHandler)}>Submit</Button>   {/*Tambahkan handle submit */}
        </CardBody>
      </Card>
    </>
  )
};

export default FormTasks;