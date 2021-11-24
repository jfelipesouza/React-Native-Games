import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { categories } from "../../utils/category";
import {
  AppointementButton,
  AppointementCategory,
  AppointementContainer,
  AppointementContent,
  AppointementDate,
  AppointementDateInfo,
  AppointementFooter,
  AppointementHeader,
  AppointementPlayers,
  AppointementPlayInfo,
  AppointementTitle,
} from "./styled";
import GuildIcon from "../guildIcon";
import Player from "../../assets/player.svg";
import Calendar from "../../assets/calendar.svg";

export type GuildProps = {
  id: string;
  name: string;
  icon?: null;
  owner: Boolean;
};

export type AppintementProps = {
  id: string;
  guild: GuildProps;
  description: string;
  date: string;
  category: string;
};

type Props = RectButtonProps & {
  data: AppintementProps;
};

const Appointement: React.FC<Props> = ({ data, ...rest }) => {
  const { colors } = useTheme();
  const [category] = categories.filter((item) => item.id === data.category);

  const { owner } = data.guild;

  return (
    <AppointementButton {...rest}>
      <AppointementContainer>
        <GuildIcon />
        <AppointementContent>
          <AppointementHeader>
            <AppointementTitle>{data.guild.name}</AppointementTitle>
            <AppointementCategory>{category.title}</AppointementCategory>
          </AppointementHeader>

          <AppointementFooter>
            <AppointementDateInfo>
              <Calendar />
              <AppointementDate>{data.date}</AppointementDate>
            </AppointementDateInfo>

            <AppointementPlayInfo>
              <Player fill={owner ? colors.primary : colors.on} />
              <AppointementPlayers
                style={{ color: owner ? colors.primary : colors.on }}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </AppointementPlayers>
            </AppointementPlayInfo>
          </AppointementFooter>
        </AppointementContent>
      </AppointementContainer>
    </AppointementButton>
  );
};

export default Appointement;
