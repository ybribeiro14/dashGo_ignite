/* eslint-disable max-len */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name, label, error, ...rest
}, ref) => (
  <FormControl isInvalid={!!error}>
    { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <ChakraInput
      name={name}
      type="email"
      id={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{ bgColor: 'gray.900' }}
      size="lg"
      ref={ref}
      {...rest}
    />

    { !!error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
    )}
  </FormControl>
);

export const Input = forwardRef(InputBase);
