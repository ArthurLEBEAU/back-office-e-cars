import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import {
  ATInput,
  APInput,
} from "@components/SharedComponents/AtomicComponents/Input";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import Logo from "@components/SharedComponents/Logo/Logo";
import { useLoginMutation } from "@redux/feature/services/loginSlice";
import { setUserInfo } from "@redux/feature/slices/authSlice";
import { Alert, Card, Form, Typography, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginComponent() {
  const { Paragraph } = Typography;
  const dispatch = useDispatch();
  const [login, { isLoading, isSuccess, isError, error }]: any =
    useLoginMutation();
  const navigate = useNavigate();
  const Validate = async (formData: any) => {
    try {
      const user = await login({
        username: formData.username,
        password: formData.password,
      }).unwrap();
      dispatch(setUserInfo({
        'username': formData.username,
        'token': user.access_token,
      }));
      localStorage.setItem("token", user.access_token);
      message.success({
        content: "Vous vous êtes connecté avec succès",
        key: 1,
      });
      navigate(`${"/dashboard/cars"}`, { replace: true });
    } catch (err) {
    }
  };

  return (
    <div
      className=" h-screen  "
      style={{
        background: `url(${"https://images.pexels.com/photos/1478524/pexels-photo-1478524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div
        className="w-full h-full "
        style={{ background: "rgba(22,32,26,0.7)" }}
      >
        <div className=" items-center h-full  flex justify-center lg:justify-around ">
          <div className="w-1/2 hidden -mt-40  lg:block space-y-10">
            <AText size="high+3" bold>
              <span className="text-white">
                Gérez Vos Ventes avec Simplicité
              </span>
            </AText>

            <div className="w-2/3">
              <AText className="text-white" size="high">
                Optimisez votre expérience de vente de voitures en ligne grâce à notre interface conviviale.
              </AText>
            </div>
          </div>

          <Card style={{ width: "35rem" }} className="rounded-lg   py-10">
            <div className=" flex items-center px-7 flex-col space-y-10">
              <Logo collapsed addClass className={"w-20 h-20"} />

              <AText center size="base+2" bold>
                Connectez-vous à votre espace
              </AText>
              <Form
                layout="vertical"
                onFinish={Validate}
                className="w-full space-y-8 pt-5"
              >
                <ATInput
                  type="text"
                  label="Nom d'utilisateur"
                  name="username"
                  size="large"
                  rules={[
                    { required: true, message: "Veuillez entrer votre username" },
                  ]}
                />

                <APInput
                  label="Mot de passe"
                  name="password"
                  size="large"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre mot de passe",
                    },
                  ]}
                />
                <div className="space-y-5">
                  <AButton
                    loading={isLoading}
                    className="w-full justify-center"
                    action={null}
                    type="primary"
                    htmlType="submit"
                  >
                    Se connecter
                  </AButton>

                  {/* </Link> */}
                </div>
              </Form>

              {isSuccess ? (
                <>
                  <Alert
                    message="Succès"
                    description={"connecté avec succès"}
                    type="success"
                  />
                </>
              ) : isError ? (
                <Alert
                  message="Echec"
                  description={
                    <Paragraph>
                      {error?.status === "PARSING_ERROR"
                        ? error?.data
                        : error?.status === 400
                          ? error?.data.message.replace(
                            "Username",
                            "L'email/Le nom d'utilisateur"
                          )
                          : "Une erreur serveur est survenue, veuillez réessayer plus tard"}
                    </Paragraph>
                  }
                  type="error"
                />
              ) : null}

              <div className="flex-col space-y-3 items-center text-center">
                <AText>
                  Copyright © 2023 E-CARS. All rights reserved.
                </AText>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
