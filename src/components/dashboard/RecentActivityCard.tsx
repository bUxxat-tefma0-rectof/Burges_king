import { Calendar, DollarSign, UserPlus, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: "appointment" | "payment" | "client" | "review";
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "appointment",
    title: "Novo agendamento",
    description: "Maria Silva - Corte feminino",
    time: "Há 5 min",
  },
  {
    id: "2",
    type: "payment",
    title: "Pagamento recebido",
    description: "R$ 250,00 - Cartão de crédito",
    time: "Há 15 min",
  },
  {
    id: "3",
    type: "client",
    title: "Novo cliente cadastrado",
    description: "João Santos",
    time: "Há 30 min",
  },
  {
    id: "4",
    type: "review",
    title: "Nova avaliação",
    description: "5 estrelas - Excelente atendimento!",
    time: "Há 1 hora",
  },
  {
    id: "5",
    type: "appointment",
    title: "Agendamento confirmado",
    description: "Ana Costa - Manicure",
    time: "Há 2 horas",
  },
];

const getIcon = (type: Activity["type"]) => {
  switch (type) {
    case "appointment":
      return Calendar;
    case "payment":
      return DollarSign;
    case "client":
      return UserPlus;
    case "review":
      return Star;
  }
};

const getIconStyle = (type: Activity["type"]) => {
  switch (type) {
    case "appointment":
      return "bg-info/10 text-info";
    case "payment":
      return "bg-success/10 text-success";
    case "client":
      return "bg-primary/10 text-primary";
    case "review":
      return "bg-warning/10 text-warning";
  }
};

export const RecentActivityCard = () => {
  return (
    <div className="card-elevated p-6 animate-fade-in">
      <h3 className="mb-4 text-lg font-semibold">Atividade Recente</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = getIcon(activity.type);
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={cn("rounded-lg p-2", getIconStyle(activity.type))}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
