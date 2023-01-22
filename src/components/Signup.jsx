import {
    FormControl,
    Input,
    Stack,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useToast } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { Box,Heading } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  
  function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const toast = useToast();
    const onSubmit = (data) => {
      toast({
        title: 'Account created Successfully',
        status: 'success',
        position: "top",
        duration: 5000,
        isClosable: true,
      })
     
    };
    const validatePasswordMatch = (value) => {
      return watch("password") === value || "Passwords do not match";
    };
  
    return (
        <Stack display="flex" justifyContent="center" alignItems="center">
      <VStack m={5}>
        <Box
          w={["sm", "2xl"]}
          h={["sm", "xl"]}
          m={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow= "hidden"
          
        >
            <Box
            w={["sm", "ls"]}
            bg="cyan.400"
            h={["sm", "ls"]}
            p={5}
            borderRadius="15px 0 0 15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack display="flex"
            justifyContent="center"
            alignItems="center">
              <Heading as="h1" size="md" noOfLines={1}>
                Welcome Back
              </Heading>
              <Link to="/">
                <Button type="submit" bg="green.50" px={5} borderRadius="20px" w={["full", "auto"]}>
                  Log In
                </Button>
              </Link>
              </Stack>
          </Box>
          <Box
            w={["sm", "2xl"]}
            bg="green.50"
            h={["sm", "ls"]}
            borderRadius="0 15px 15px 0"
          >
            <Box margin={2} padding={2} textAlign="center">
              <Heading as="h1" size="md" noOfLines={1}>
                Create Account
              </Heading>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} padding={5}>
              <FormControl py={1}>
                  <Input
                    id="name"
                    type="text"
                    bg="white"
                    {...register("name", { required: true, maxLength: 80 })}
                    placeholder="Enter your name"
                    size="md"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">Name is required</p>
                  )}
                </FormControl>
                <FormControl py={1}>
                  <Input
                    id="email"
                    type="email"
                    bg="white"
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Enter your email"
                    size="md"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <p role="alert">{errors.email?.message}</p>}
                </FormControl>

                <FormControl py={1}>
                  <Input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: "Enter Your Password",
                    })}
                    size="md"
                    bg="white"
                    placeholder="Enter your Password"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.password && (
                    <p role="alert">{errors.password?.message}</p>
                  )}
                </FormControl>
                <FormControl py={1}>
                  <Input
                    id="confirmPassword"
                    type="password"
                    bg="white"
                    {...register("confirmPassword", {
                     required: "Enter Your Confirm Password",validate:  value => validatePasswordMatch(value),
                     })}
                    size="md"
                    placeholder="Enter your Confirm Password"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                   />
                   {errors.confirmPassword && (
                     <p role="alert">{errors.confirmPassword?.message}</p>
                 )}
                </FormControl>
                
                <Button type="submit" bg="cyan.400" borderRadius="15px" w={["full", "auto"]}>
                  Sign Up
                </Button>
              </Stack>
            </form>
          </Box>
          
        </Box>
      </VStack>
    </Stack>
    );
  }
  
  export default SignUp;
  
