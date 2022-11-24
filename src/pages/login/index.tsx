import React from 'react';
import { IoReturnDownBackSharp } from 'react-icons/io5';
// import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';
import { Container } from './styles';

// interface infoLogin {
//   email: string;
//   password: string;
// }

const Login: React.FC = () => (
  //   const formref = useRef<FormHandles>(null);

  //   const [showPassword, setShowPassword] = useState<boolean>(false);
  //   // const [login, setLogin] = useState<infoLogin>({} as infoLogin);
  //   const handleSubmit = useCallback(
  //     (data: infoLogin) => {
  //       formref.current?.setErrors({});
  //       const { email, password } = data;
  //       //   signIn({ email, password });
  //     },
  //     [signIn],
  //   );
  <Container>
    <nav>
      <IoReturnDownBackSharp />
    </nav>
    {/* <Form ref={formref} onSubmit={handleSubmit}>
      <div className="input">
        <p>Login/E-mail</p>
        <Input
          name="email"
          type="email"
          placeholder="kenzi.lawson@example.com"
        />
      </div>
      <div>
        <p>Senha</p>
        <div className="password">
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VscEye /> : <VscEyeClosed />}
          </button>
        </div>

        <Link to="/">Esquecir minha senha</Link>
      </div>

      <Button width={571} height={53} fontSize={27} type="submit">
        Vamos nessa
      </Button>
    </Form> */}
  </Container>
);
export default Login;
