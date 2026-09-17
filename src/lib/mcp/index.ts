import { defineMcp } from "@lovable.dev/mcp-js";
import dojoInfoTool from "./tools/dojo-info";
import trainingTool from "./tools/training";

export default defineMcp({
  name: "issami-dojo-official-site",
  title: "Issami Dojo Official Site",
  version: "0.1.0",
  instructions:
    "Ferramentas com as informações públicas do Issami Dojo, academia de Karatê de Contato Shinkyokushin em Presidente Prudente (SP). Use `get_dojo_info` para endereço, contato e redes sociais, e `get_training_info` para turmas, horários e responsáveis técnicos.",
  tools: [dojoInfoTool, trainingTool],
});
