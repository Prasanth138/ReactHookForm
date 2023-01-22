import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Box,Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(`Email : ${data.email} => Password : ${data.passsword} `);
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
          
        >
          <Box
            w={["sm", "2xl"]}
            bg="green.50"
            h={["sm", "ls"]}
            borderRadius="15px 0 0 15px"
          >
            <Box margin={3} padding={5} textAlign="center">
              <Heading as="h1" size="md" noOfLines={1}>
                Login to Your Account
              </Heading>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} padding={2}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
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

                <FormControl>
                  <FormLabel htmlFor="date">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    {...register("passsword", {
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
                <HStack w="full" alignSelf="start">
                  <Button variant="link" variantcolor="cyan">
                    Forgot Password?
                  </Button>
                </HStack>
                <Button type="submit" bg="cyan.400" borderRadius="15px" w={["full", "auto"]}>
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
          <Box
            w={["sm", "ls"]}
            bg="cyan.400"
            h={["sm", "ls"]}
            p={5}
            borderRadius="0 15px 15px 0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack>
              <Heading as="h1" size="md" noOfLines={1}>
                New Here?
              </Heading>
              <Link to="/signup">
                <Button type="submit" bg="green.50" px={5} borderRadius="20px" w={["full", "auto"]}>
                  Sign Up
                </Button>
              </Link>
              </Stack>
          </Box>
        </Box>
      </VStack>
    </Stack>
  );
}

export default Login;

