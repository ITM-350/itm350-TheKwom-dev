variable "ami" {
  type = string
}

variable "cluster_name" {
  type = string
}

variable "container_image" {
  type = string
}

variable "container_port" {
  type = number
}

variable "instance_name_prefix" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "lab_role" {
  type = string
}

variable "region" {
  type = string
}

variable "vpc_cidr" {
  type = string
}

variable "vpc_prefix" {
  type = string
}

# New variables for NAT Gateway
variable "nat_gateway_eip" {
  type = string
}

# New variable for ALB listener port
variable "alb_listener_port" {
  type = number
  default = 80 # Default is HTTP
}

# New variable for capacity provider scaling
variable "asg_min_size" {
  type = number
}

variable "asg_max_size" {
  type = number
}

variable "asg_desired_capacity" {
  type = number
}
