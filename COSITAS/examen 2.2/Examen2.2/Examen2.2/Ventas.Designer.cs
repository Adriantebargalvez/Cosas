namespace Examen2._2
{
    partial class Ventas
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.label7 = new System.Windows.Forms.Label();
            this.IngresosSala = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.Porcentajeocupadas = new System.Windows.Forms.Label();
            this.ButacasLibres = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.Guardar = new System.Windows.Forms.Button();
            this.Vaciar = new System.Windows.Forms.Button();
            this.vender = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // comboBox1
            // 
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Items.AddRange(new object[] {
            "Sala1",
            "Sala2",
            "Sala3",
            "Sala4"});
            this.comboBox1.Location = new System.Drawing.Point(368, 64);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(337, 33);
            this.comboBox1.TabIndex = 22;
            this.comboBox1.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(660, 272);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(59, 25);
            this.label7.TabIndex = 21;
            this.label7.Text = "label7";
            // 
            // IngresosSala
            // 
            this.IngresosSala.AutoSize = true;
            this.IngresosSala.Location = new System.Drawing.Point(516, 272);
            this.IngresosSala.Name = "IngresosSala";
            this.IngresosSala.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.IngresosSala.Size = new System.Drawing.Size(117, 25);
            this.IngresosSala.TabIndex = 20;
            this.IngresosSala.Text = "Ingresos Sala";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(253, 362);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(59, 25);
            this.label5.TabIndex = 19;
            this.label5.Text = "label5";
            // 
            // Porcentajeocupadas
            // 
            this.Porcentajeocupadas.AutoSize = true;
            this.Porcentajeocupadas.Location = new System.Drawing.Point(47, 362);
            this.Porcentajeocupadas.Name = "Porcentajeocupadas";
            this.Porcentajeocupadas.Size = new System.Drawing.Size(200, 25);
            this.Porcentajeocupadas.TabIndex = 18;
            this.Porcentajeocupadas.Text = "Porcentaje de ocupadas";
            // 
            // ButacasLibres
            // 
            this.ButacasLibres.AutoSize = true;
            this.ButacasLibres.Location = new System.Drawing.Point(100, 289);
            this.ButacasLibres.Name = "ButacasLibres";
            this.ButacasLibres.Size = new System.Drawing.Size(123, 25);
            this.ButacasLibres.TabIndex = 17;
            this.ButacasLibres.Text = "Butacas Libres";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(253, 289);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(59, 25);
            this.label2.TabIndex = 16;
            this.label2.Text = "label2";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(253, 72);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 25);
            this.label1.TabIndex = 15;
            this.label1.Text = "label1";
            // 
            // Guardar
            // 
            this.Guardar.Location = new System.Drawing.Point(574, 330);
            this.Guardar.Name = "Guardar";
            this.Guardar.Size = new System.Drawing.Size(180, 57);
            this.Guardar.TabIndex = 14;
            this.Guardar.Text = "Guardar";
            this.Guardar.UseVisualStyleBackColor = true;
            this.Guardar.Click += new System.EventHandler(this.Guardar_Click);
            // 
            // Vaciar
            // 
            this.Vaciar.Location = new System.Drawing.Point(559, 168);
            this.Vaciar.Name = "Vaciar";
            this.Vaciar.Size = new System.Drawing.Size(171, 65);
            this.Vaciar.TabIndex = 13;
            this.Vaciar.Text = "Vaciar";
            this.Vaciar.UseVisualStyleBackColor = true;
            this.Vaciar.Click += new System.EventHandler(this.button2_Click);
            // 
            // vender
            // 
            this.vender.Location = new System.Drawing.Point(82, 158);
            this.vender.Name = "vender";
            this.vender.Size = new System.Drawing.Size(165, 57);
            this.vender.TabIndex = 12;
            this.vender.Text = "Vender entrada";
            this.vender.UseVisualStyleBackColor = true;
            // 
            // Ventas
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.comboBox1);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.IngresosSala);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.Porcentajeocupadas);
            this.Controls.Add(this.ButacasLibres);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.Guardar);
            this.Controls.Add(this.Vaciar);
            this.Controls.Add(this.vender);
            this.Name = "Ventas";
            this.Text = "Ventas";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private ComboBox comboBox1;
        private Label label7;
        private Label IngresosSala;
        private Label label5;
        private Label Porcentajeocupadas;
        private Label ButacasLibres;
        private Label label2;
        private Label label1;
        private Button Guardar;
        private Button Vaciar;
        private Button vender;
    }
}