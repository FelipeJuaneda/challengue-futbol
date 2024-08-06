import React from "react";
import { useTeams } from "@/context/TeamsContext";
import TeamCard from "./TeamCard";
import Image from "next/image";

const WelcomeSection: React.FC = () => {
  const { teams, addTeam, deleteTeam, editTeamName } = useTeams();
  const messiImage = "/images/messi-copa-mundial.jpg";

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 h-[450px]">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full lg:py-24">
          <Image
            alt="imagen de Messi campeón del mundo"
            src={messiImage}
            width={500}
            height={500}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Bienvenido a el partido de tu sueño
          </h2>
          <p className="mt-4 text-gray-600">
            ¡Construye tu equipo de ensueño con los jugadores que más te gusten!
          </p>
          <div className="container mx-auto py-3 flex flex-col gap-3">
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onDelete={deleteTeam}
                onEdit={editTeamName}
              />
            ))}
            {teams.length < 2 && (
              <button
                onClick={addTeam}
                className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                aria-label="Agregar Equipo"
              >
                Agregar Equipo
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
