import { AButton } from "@components/SharedComponents/AtomicComponents/Button";
import {
  ATInput,
  APInput,
} from "@components/SharedComponents/AtomicComponents/Input";
import AText from "@components/SharedComponents/AtomicComponents/Text";
import Logo from "@components/SharedComponents/Logo/Logo";
import { Card, Form } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function LoginComponent() {
  let loading = false;

  const navigate = useNavigate();
  const Validate = async (formData: any) => {
    try {
      loading = true;
      //   const user = await login({
      //     username: formData.username,
      //     password: formData.password,
      //   }).unwrap();
      //   dispatch(setUserInfo(user));
      localStorage.setItem("connected", "true");
      navigate(`${"/accueil"}`);
    } catch (err) {}
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
                IL ETAIT UNE FOIS LE BLANK PROJECT :)
              </span>
            </AText>

            <div className="w-2/3">
              <AText className="text-white" size="high">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem perspiciatis voluptates iusto nesciunt.
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
                  label="Adresse mail ou nom d'utilisateur"
                  name="username"
                  rules={[
                    { required: true, message: "Veuillez entrer votre email" },
                  ]}
                />

                <APInput
                  label="Mot de passe"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrer votre mot de passe",
                    },
                  ]}
                />
                <div className="space-y-5">
                  <AButton
                    loading={loading}
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

              <div className="flex-col space-y-3 items-center text-center">
                <AText>
                  Copyright © 2022 Pronotaris Inc. All rights reserved.
                </AText>

                <span className="flex items-center space-x-3 ">
                  <Link to="/conditions-generales-de-services">
                    Conditions générales de services
                  </Link>
                  <span>|</span>
                  <Link to="/politique-de-confidentialite">
                    Politique de confidentialité
                  </Link>
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
