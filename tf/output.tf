output "load_balancer_url" {
  description = "The DNS name of the load balancer"
  value = format("Open this URL to see your app http://%s/", try(aws_lb.ecs_alb.dns_name, null))
}
