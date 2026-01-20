import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Calendar,
  ClipboardList,
  FolderOpen,
  Users,
  UserCog,
  Wallet,
  Package,
  ShoppingCart,
  Wrench,
  LayoutDashboard,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  ChevronDown,
  ChevronRight,
  BarChart3,
  Building2,
  User,
  Download,
  Bell,
  TrendingUp,
  DollarSign,
  Gift,
  Star,
  Repeat,
  Percent,
  HandCoins,
  PiggyBank,
  FileBarChart,
  Cake,
  Trophy,
  RefreshCcw,
  UserPlus,
  UserX,
  Copy,
  UserCheck,
  MapPin,
  Phone,
  Coins,
  Activity,
  Boxes,
  Receipt,
  Heart,
  BookOpen,
  Send,
  Zap,
  Mail,
  BellRing,
  Cog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Acompanhamento",
    icon: Activity,
    submenu: [
      { title: "Agenda", icon: Calendar, path: "/agenda" },
      { title: "Ordens de Serviço", icon: ClipboardList, path: "/ordens-servico" },
    ],
  },
  {
    title: "Cadastro",
    icon: FolderOpen,
    submenu: [
      { title: "Categorias Contas a Pagar", icon: Wallet, path: "/cadastro/categorias-pagar" },
      { title: "Categorias Contas a Receber", icon: PiggyBank, path: "/cadastro/categorias-receber" },
      { title: "Descontos", icon: Percent, path: "/cadastro/descontos" },
      { title: "Formas de Pagamento", icon: CreditCard, path: "/cadastro/formas-pagamento" },
      { title: "Fornecedores", icon: Building2, path: "/cadastro/fornecedores" },
      { title: "Grupo de Serviços", icon: Wrench, path: "/cadastro/grupo-servicos" },
      { title: "Grupo de Produtos", icon: Boxes, path: "/cadastro/grupo-produtos" },
      { title: "Grupo de Assinaturas", icon: Repeat, path: "/cadastro/grupo-assinaturas" },
      { title: "Matriz de Comissões", icon: HandCoins, path: "/cadastro/matriz-comissoes" },
      { title: "Modelos de Contrato", icon: FileText, path: "/cadastro/modelos-contrato" },
      { title: "Motivos de Cancelamento", icon: UserX, path: "/cadastro/motivos-cancelamento" },
      { title: "Planos de Assinatura", icon: Star, path: "/cadastro/planos-assinatura" },
      { title: "Perfis de Acesso", icon: UserCog, path: "/cadastro/perfis-acesso" },
      { title: "Origens de Cliente", icon: MapPin, path: "/cadastro/origens-cliente" },
    ],
  },
  {
    title: "Clientes",
    icon: Users,
    path: "/clientes",
  },
  {
    title: "Colaboradores",
    icon: UserCog,
    path: "/colaboradores",
  },
  {
    title: "Contas a Pagar/Receber",
    icon: Wallet,
    path: "/contas",
  },
  {
    title: "Pacotes",
    icon: Package,
    path: "/pacotes",
  },
  {
    title: "Produtos",
    icon: ShoppingCart,
    path: "/produtos",
  },
  {
    title: "Serviços",
    icon: Wrench,
    path: "/servicos",
  },
  {
    title: "Assinaturas",
    icon: Repeat,
    submenu: [
      { title: "Assinaturas", icon: Repeat, path: "/assinaturas" },
      { title: "Pagamentos", icon: CreditCard, path: "/assinaturas/pagamentos" },
    ],
  },
  {
    title: "Agendamentos",
    icon: Calendar,
    submenu: [
      { title: "Agendamento", icon: Calendar, path: "/agendamentos" },
      { title: "Agendamentos Recorrentes", icon: RefreshCcw, path: "/agendamentos/recorrentes" },
    ],
  },
  {
    title: "Atendimento",
    icon: Phone,
    path: "/atendimento",
  },
  {
    title: "Avaliações",
    icon: Star,
    path: "/avaliacoes",
  },
  {
    title: "Caixa",
    icon: DollarSign,
    submenu: [
      { title: "Aniversariantes", icon: Cake, path: "/caixa/aniversariantes" },
      { title: "Ranking de Clientes", icon: Trophy, path: "/caixa/ranking" },
      { title: "Retornos", icon: RefreshCcw, path: "/caixa/retornos" },
      { title: "Novos", icon: UserPlus, path: "/caixa/novos" },
      { title: "Abandonos", icon: UserX, path: "/caixa/abandonos" },
      { title: "Clientes Duplicados", icon: Copy, path: "/caixa/duplicados" },
      { title: "Clientes Atendidos", icon: UserCheck, path: "/caixa/atendidos" },
      { title: "Origens de Clientes", icon: MapPin, path: "/caixa/origens" },
    ],
  },
  {
    title: "Contato",
    icon: Phone,
    path: "/contato",
  },
  {
    title: "Crédito em Dinheiro",
    icon: Coins,
    submenu: [
      { title: "Situação de Créditos", icon: PiggyBank, path: "/credito/situacao" },
      { title: "Movimentações dos Créditos", icon: Activity, path: "/credito/movimentacoes" },
    ],
  },
  {
    title: "Crédito Recorrente",
    icon: Repeat,
    path: "/credito-recorrente",
  },
  {
    title: "Desconto",
    icon: Percent,
    path: "/desconto",
  },
  {
    title: "Estatística",
    icon: BarChart3,
    submenu: [
      { title: "Unidade", icon: Building2, path: "/estatistica/unidade" },
      { title: "Colaborador", icon: UserCog, path: "/estatistica/colaborador" },
    ],
  },
  {
    title: "Exportações",
    icon: Download,
    path: "/exportacoes",
  },
  {
    title: "Faturamento",
    icon: Receipt,
    submenu: [
      { title: "Faturamento", icon: Receipt, path: "/faturamento" },
      { title: "Por Forma de Pagamento", icon: CreditCard, path: "/faturamento/por-pagamento" },
    ],
  },
  {
    title: "Fidelidade",
    icon: Heart,
    submenu: [
      { title: "Situação do Fidelidade", icon: Gift, path: "/fidelidade/situacao" },
      { title: "Movimentações de Pontos", icon: Activity, path: "/fidelidade/movimentacoes" },
    ],
  },
  {
    title: "Financeiro / Contábeis",
    icon: FileBarChart,
    submenu: [
      { title: "DRE Gerencial", icon: FileBarChart, path: "/financeiro/dre" },
      { title: "Extratos", icon: BookOpen, path: "/financeiro/extratos" },
      { title: "Contas a Pagar", icon: Wallet, path: "/financeiro/contas-pagar" },
      { title: "Contas a Receber", icon: PiggyBank, path: "/financeiro/contas-receber" },
      { title: "Vales/Adiantamentos", icon: HandCoins, path: "/financeiro/vales" },
    ],
  },
  {
    title: "Ordens de Serviços",
    icon: ClipboardList,
    path: "/ordens",
  },
  {
    title: "Pacote",
    icon: Package,
    submenu: [
      { title: "Execução de Pacotes", icon: Activity, path: "/pacote/execucao" },
      { title: "Saldo de Pacotes", icon: PiggyBank, path: "/pacote/saldo" },
      { title: "Situações dos Pacotes", icon: ClipboardList, path: "/pacote/situacoes" },
      { title: "Movimentação dos Pacotes", icon: TrendingUp, path: "/pacote/movimentacao" },
    ],
  },
  {
    title: "Pagamentos",
    icon: CreditCard,
    submenu: [
      { title: "Pagamento", icon: CreditCard, path: "/pagamentos" },
      { title: "Gorjetas", icon: Gift, path: "/pagamentos/gorjetas" },
    ],
  },
  {
    title: "Relatórios",
    icon: FileText,
    submenu: [
      { title: "Financeiro / Contábil", icon: FileBarChart, path: "/relatorios/financeiro" },
      { title: "Performance", icon: TrendingUp, path: "/relatorios/performance" },
    ],
  },
  {
    title: "Mensagens e Notificações",
    icon: MessageSquare,
    submenu: [
      { title: "Audiência", icon: Users, path: "/mensagens/audiencia" },
      { title: "Automação", icon: Zap, path: "/mensagens/automacao" },
      { title: "Mensagens", icon: Mail, path: "/mensagens" },
      { title: "WhatsApp Web", icon: Send, path: "/mensagens/whatsapp" },
      { title: "Notificações Internas", icon: BellRing, path: "/mensagens/notificacoes" },
      { title: "Configurações", icon: Cog, path: "/mensagens/configuracoes" },
    ],
  },
  {
    title: "Configurações",
    icon: Settings,
    submenu: [
      { title: "Minha Unidade", icon: Building2, path: "/configuracoes/unidade" },
      { title: "Minha Conta", icon: User, path: "/configuracoes/conta" },
      { title: "Exportação", icon: Download, path: "/configuracoes/exportacao" },
      { title: "Editar Perfil", icon: UserCog, path: "/configuracoes/perfil" },
    ],
  },
];

interface SidebarItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarItem = ({ item, isCollapsed }: SidebarItemProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isActive = item.path === location.pathname;
  const isSubmenuActive = item.submenu?.some((sub) => sub.path === location.pathname);

  if (hasSubmenu) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "menu-item w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            (isOpen || isSubmenuActive) && "bg-sidebar-accent/50 text-sidebar-accent-foreground"
          )}
        >
          <div className="flex items-center gap-3">
            <item.icon className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span className="truncate">{item.title}</span>}
          </div>
          {!isCollapsed && (
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          )}
        </button>
        {isOpen && !isCollapsed && (
          <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border pl-3">
            {item.submenu?.map((subItem) => (
              <Link
                key={subItem.path}
                to={subItem.path || "#"}
                className={cn(
                  "menu-item text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  location.pathname === subItem.path &&
                    "bg-sidebar-primary text-sidebar-primary-foreground"
                )}
              >
                <subItem.icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate text-xs">{subItem.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path || "#"}
      className={cn(
        "menu-item mb-1 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive && "bg-sidebar-primary text-sidebar-primary-foreground"
      )}
    >
      <item.icon className="h-4 w-4 shrink-0" />
      {!isCollapsed && <span className="truncate">{item.title}</span>}
    </Link>
  );
};

interface AppSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const AppSidebar = ({ isCollapsed, onToggle }: AppSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
      style={{ background: "var(--gradient-sidebar)" }}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
              <LayoutDashboard className="h-4 w-4 text-sidebar-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-sidebar-accent-foreground">
              GestãoPro
            </span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              !isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Menu */}
      <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem key={item.title} item={item} isCollapsed={isCollapsed} />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};
