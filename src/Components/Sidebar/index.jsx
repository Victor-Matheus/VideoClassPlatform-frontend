import React, { useState, useEffect } from "react";
import * as S from "./style";
import ClassModule from "../ClassModule";
import axios from "axios";
import { backendURL } from "../../Services/api";

const Sidebar = (props) => {
  const [token] = useState(localStorage.getItem("loginToken"));
  const [modules, setModules] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendURL}/module`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        console.log(res);
        setModules(res?.data);
        props.moduleTitle(res?.data[0]?.title);
        props.moduleDescription(res?.data[0]?.description);
        props.moduleId(res?.data[0]?._id);
        props.handleModule(res?.data[0]?._id);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleModuleData = (title, description, id) => {
    props.moduleTitle(title);
    props.moduleDescription(description);
    props.moduleId(id);
    props.handleModule(id);
  };

  const addNewClassModule = () => {
    props.registerModule(true);
  };

  return (
    <S.Container>
      <S.Content>
        <S.NewClassModuleDiv>
          <ClassModule
            title="Adicionar novo módulo"
            plusIcon={true}
            onClick={addNewClassModule}
          />
        </S.NewClassModuleDiv>
        <S.ClassModuleDiv>
          {modules?.map((value, i) => {
            return (
              <ClassModule
                id={i}
                title={value.title}
                onClick={() =>
                  handleModuleData(value.title, value.description, value._id)
                }
              />
            );
          })}
        </S.ClassModuleDiv>
      </S.Content>
    </S.Container>
  );
};

export default Sidebar;
