namespace WindowsFormsApp1
{
    partial class Datos
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
            this.gBoxDatosPersonales = new System.Windows.Forms.GroupBox();
            this.datepickDatosPersonales = new System.Windows.Forms.DateTimePicker();
            this.txtboxApellido = new System.Windows.Forms.TextBox();
            this.txtboxNombre = new System.Windows.Forms.TextBox();
            this.lblFecha = new System.Windows.Forms.Label();
            this.lblApellidos = new System.Windows.Forms.Label();
            this.lblNombre = new System.Windows.Forms.Label();
            this.gBoxCálculos = new System.Windows.Forms.GroupBox();
            this.BtnAntiguedad = new System.Windows.Forms.Button();
            this.BtnEdad = new System.Windows.Forms.Button();
            this.gBoxDatosEmpresa = new System.Windows.Forms.GroupBox();
            this.txtbxsalario = new System.Windows.Forms.TextBox();
            this.nUpDownProducc = new System.Windows.Forms.NumericUpDown();
            this.nUpDownComerc = new System.Windows.Forms.NumericUpDown();
            this.nUpDownMante = new System.Windows.Forms.NumericUpDown();
            this.nUpDownAdmin = new System.Windows.Forms.NumericUpDown();
            this.cboxProduccion = new System.Windows.Forms.CheckBox();
            this.cboxComerciales = new System.Windows.Forms.CheckBox();
            this.cboxMantenimiento = new System.Windows.Forms.CheckBox();
            this.cboxAdministracion = new System.Windows.Forms.CheckBox();
            this.datepickDatosEmpresa = new System.Windows.Forms.DateTimePicker();
            this.cboxSalario = new System.Windows.Forms.ComboBox();
            this.lblPersonasCargo = new System.Windows.Forms.Label();
            this.lblSalario = new System.Windows.Forms.Label();
            this.lblFechaEmpresa = new System.Windows.Forms.Label();
            this.BtnAlta = new System.Windows.Forms.Button();
            this.BtnAbrirFichero = new System.Windows.Forms.Button();
            this.btnGuardar = new System.Windows.Forms.Button();
            this.lblRuta = new System.Windows.Forms.Label();
            this.txtBoxRuta = new System.Windows.Forms.TextBox();
            this.OPFDialog = new System.Windows.Forms.OpenFileDialog();
            this.SFDialog = new System.Windows.Forms.SaveFileDialog();
            this.gBoxDatosPersonales.SuspendLayout();
            this.gBoxCálculos.SuspendLayout();
            this.gBoxDatosEmpresa.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownProducc)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownComerc)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownMante)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownAdmin)).BeginInit();
            this.SuspendLayout();
            // 
            // gBoxDatosPersonales
            // 
            this.gBoxDatosPersonales.Controls.Add(this.datepickDatosPersonales);
            this.gBoxDatosPersonales.Controls.Add(this.txtboxApellido);
            this.gBoxDatosPersonales.Controls.Add(this.txtboxNombre);
            this.gBoxDatosPersonales.Controls.Add(this.lblFecha);
            this.gBoxDatosPersonales.Controls.Add(this.lblApellidos);
            this.gBoxDatosPersonales.Controls.Add(this.lblNombre);
            this.gBoxDatosPersonales.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gBoxDatosPersonales.Location = new System.Drawing.Point(33, 64);
            this.gBoxDatosPersonales.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxDatosPersonales.Name = "gBoxDatosPersonales";
            this.gBoxDatosPersonales.Padding = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxDatosPersonales.Size = new System.Drawing.Size(300, 119);
            this.gBoxDatosPersonales.TabIndex = 0;
            this.gBoxDatosPersonales.TabStop = false;
            this.gBoxDatosPersonales.Text = "Datos personales";
            // 
            // datepickDatosPersonales
            // 
            this.datepickDatosPersonales.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.datepickDatosPersonales.Location = new System.Drawing.Point(69, 85);
            this.datepickDatosPersonales.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.datepickDatosPersonales.Name = "datepickDatosPersonales";
            this.datepickDatosPersonales.Size = new System.Drawing.Size(219, 22);
            this.datepickDatosPersonales.TabIndex = 10;
            // 
            // txtboxApellido
            // 
            this.txtboxApellido.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtboxApellido.Location = new System.Drawing.Point(69, 57);
            this.txtboxApellido.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtboxApellido.Name = "txtboxApellido";
            this.txtboxApellido.Size = new System.Drawing.Size(219, 22);
            this.txtboxApellido.TabIndex = 9;
            // 
            // txtboxNombre
            // 
            this.txtboxNombre.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtboxNombre.Location = new System.Drawing.Point(69, 27);
            this.txtboxNombre.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtboxNombre.Name = "txtboxNombre";
            this.txtboxNombre.Size = new System.Drawing.Size(219, 22);
            this.txtboxNombre.TabIndex = 7;
            // 
            // lblFecha
            // 
            this.lblFecha.AutoSize = true;
            this.lblFecha.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblFecha.Location = new System.Drawing.Point(11, 90);
            this.lblFecha.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblFecha.Name = "lblFecha";
            this.lblFecha.Size = new System.Drawing.Size(39, 14);
            this.lblFecha.TabIndex = 8;
            this.lblFecha.Text = "Fecha:";
            // 
            // lblApellidos
            // 
            this.lblApellidos.AutoSize = true;
            this.lblApellidos.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblApellidos.Location = new System.Drawing.Point(11, 59);
            this.lblApellidos.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblApellidos.Name = "lblApellidos";
            this.lblApellidos.Size = new System.Drawing.Size(55, 14);
            this.lblApellidos.TabIndex = 7;
            this.lblApellidos.Text = "Apellidos:";
            // 
            // lblNombre
            // 
            this.lblNombre.AutoSize = true;
            this.lblNombre.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblNombre.Location = new System.Drawing.Point(11, 31);
            this.lblNombre.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblNombre.Name = "lblNombre";
            this.lblNombre.Size = new System.Drawing.Size(50, 14);
            this.lblNombre.TabIndex = 6;
            this.lblNombre.Text = "Nombre:";
            // 
            // gBoxCálculos
            // 
            this.gBoxCálculos.Controls.Add(this.BtnAntiguedad);
            this.gBoxCálculos.Controls.Add(this.BtnEdad);
            this.gBoxCálculos.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gBoxCálculos.Location = new System.Drawing.Point(359, 71);
            this.gBoxCálculos.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxCálculos.Name = "gBoxCálculos";
            this.gBoxCálculos.Padding = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxCálculos.Size = new System.Drawing.Size(155, 112);
            this.gBoxCálculos.TabIndex = 1;
            this.gBoxCálculos.TabStop = false;
            this.gBoxCálculos.Text = "Cálculos";
            // 
            // BtnAntiguedad
            // 
            this.BtnAntiguedad.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BtnAntiguedad.Location = new System.Drawing.Point(18, 65);
            this.BtnAntiguedad.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.BtnAntiguedad.Name = "BtnAntiguedad";
            this.BtnAntiguedad.Size = new System.Drawing.Size(113, 32);
            this.BtnAntiguedad.TabIndex = 1;
            this.BtnAntiguedad.Text = "Calcular antigüedad";
            this.BtnAntiguedad.UseVisualStyleBackColor = true;
            this.BtnAntiguedad.Click += new System.EventHandler(this.BtnAntiguedad_Click);
            // 
            // BtnEdad
            // 
            this.BtnEdad.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BtnEdad.Location = new System.Drawing.Point(18, 23);
            this.BtnEdad.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.BtnEdad.Name = "BtnEdad";
            this.BtnEdad.Size = new System.Drawing.Size(113, 32);
            this.BtnEdad.TabIndex = 0;
            this.BtnEdad.Text = "Calcular edad";
            this.BtnEdad.UseVisualStyleBackColor = true;
            this.BtnEdad.Click += new System.EventHandler(this.BtnEdad_Click);
            // 
            // gBoxDatosEmpresa
            // 
            this.gBoxDatosEmpresa.Controls.Add(this.txtbxsalario);
            this.gBoxDatosEmpresa.Controls.Add(this.nUpDownProducc);
            this.gBoxDatosEmpresa.Controls.Add(this.nUpDownComerc);
            this.gBoxDatosEmpresa.Controls.Add(this.nUpDownMante);
            this.gBoxDatosEmpresa.Controls.Add(this.nUpDownAdmin);
            this.gBoxDatosEmpresa.Controls.Add(this.cboxProduccion);
            this.gBoxDatosEmpresa.Controls.Add(this.cboxComerciales);
            this.gBoxDatosEmpresa.Controls.Add(this.cboxMantenimiento);
            this.gBoxDatosEmpresa.Controls.Add(this.cboxAdministracion);
            this.gBoxDatosEmpresa.Controls.Add(this.datepickDatosEmpresa);
            this.gBoxDatosEmpresa.Controls.Add(this.cboxSalario);
            this.gBoxDatosEmpresa.Controls.Add(this.lblPersonasCargo);
            this.gBoxDatosEmpresa.Controls.Add(this.lblSalario);
            this.gBoxDatosEmpresa.Controls.Add(this.lblFechaEmpresa);
            this.gBoxDatosEmpresa.Controls.Add(this.BtnAlta);
            this.gBoxDatosEmpresa.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gBoxDatosEmpresa.Location = new System.Drawing.Point(33, 194);
            this.gBoxDatosEmpresa.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxDatosEmpresa.Name = "gBoxDatosEmpresa";
            this.gBoxDatosEmpresa.Padding = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.gBoxDatosEmpresa.Size = new System.Drawing.Size(458, 205);
            this.gBoxDatosEmpresa.TabIndex = 2;
            this.gBoxDatosEmpresa.TabStop = false;
            this.gBoxDatosEmpresa.Text = "Datos empresa";
            // 
            // txtbxsalario
            // 
            this.txtbxsalario.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtbxsalario.Location = new System.Drawing.Point(344, 57);
            this.txtbxsalario.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtbxsalario.Name = "txtbxsalario";
            this.txtbxsalario.Size = new System.Drawing.Size(72, 22);
            this.txtbxsalario.TabIndex = 21;
            this.txtbxsalario.TextChanged += new System.EventHandler(this.txtbxsalario_TextChanged);
            // 
            // nUpDownProducc
            // 
            this.nUpDownProducc.Location = new System.Drawing.Point(219, 172);
            this.nUpDownProducc.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.nUpDownProducc.Name = "nUpDownProducc";
            this.nUpDownProducc.Size = new System.Drawing.Size(41, 22);
            this.nUpDownProducc.TabIndex = 20;
            // 
            // nUpDownComerc
            // 
            this.nUpDownComerc.Location = new System.Drawing.Point(219, 142);
            this.nUpDownComerc.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.nUpDownComerc.Name = "nUpDownComerc";
            this.nUpDownComerc.Size = new System.Drawing.Size(41, 22);
            this.nUpDownComerc.TabIndex = 19;
            // 
            // nUpDownMante
            // 
            this.nUpDownMante.Location = new System.Drawing.Point(219, 116);
            this.nUpDownMante.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.nUpDownMante.Name = "nUpDownMante";
            this.nUpDownMante.Size = new System.Drawing.Size(41, 22);
            this.nUpDownMante.TabIndex = 18;
            // 
            // nUpDownAdmin
            // 
            this.nUpDownAdmin.Location = new System.Drawing.Point(219, 86);
            this.nUpDownAdmin.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.nUpDownAdmin.Name = "nUpDownAdmin";
            this.nUpDownAdmin.Size = new System.Drawing.Size(41, 22);
            this.nUpDownAdmin.TabIndex = 17;
            // 
            // cboxProduccion
            // 
            this.cboxProduccion.AutoSize = true;
            this.cboxProduccion.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboxProduccion.Location = new System.Drawing.Point(118, 176);
            this.cboxProduccion.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.cboxProduccion.Name = "cboxProduccion";
            this.cboxProduccion.Size = new System.Drawing.Size(79, 18);
            this.cboxProduccion.TabIndex = 16;
            this.cboxProduccion.Text = "Producción";
            this.cboxProduccion.UseVisualStyleBackColor = true;
            // 
            // cboxComerciales
            // 
            this.cboxComerciales.AutoSize = true;
            this.cboxComerciales.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboxComerciales.Location = new System.Drawing.Point(118, 146);
            this.cboxComerciales.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.cboxComerciales.Name = "cboxComerciales";
            this.cboxComerciales.Size = new System.Drawing.Size(86, 18);
            this.cboxComerciales.TabIndex = 15;
            this.cboxComerciales.Text = "Comerciales";
            this.cboxComerciales.UseVisualStyleBackColor = true;
            // 
            // cboxMantenimiento
            // 
            this.cboxMantenimiento.AutoSize = true;
            this.cboxMantenimiento.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboxMantenimiento.Location = new System.Drawing.Point(118, 118);
            this.cboxMantenimiento.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.cboxMantenimiento.Name = "cboxMantenimiento";
            this.cboxMantenimiento.Size = new System.Drawing.Size(102, 18);
            this.cboxMantenimiento.TabIndex = 14;
            this.cboxMantenimiento.Text = "Mantenimiento";
            this.cboxMantenimiento.UseVisualStyleBackColor = true;
            // 
            // cboxAdministracion
            // 
            this.cboxAdministracion.AutoSize = true;
            this.cboxAdministracion.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboxAdministracion.Location = new System.Drawing.Point(118, 90);
            this.cboxAdministracion.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.cboxAdministracion.Name = "cboxAdministracion";
            this.cboxAdministracion.Size = new System.Drawing.Size(100, 18);
            this.cboxAdministracion.TabIndex = 13;
            this.cboxAdministracion.Text = "Administración";
            this.cboxAdministracion.UseVisualStyleBackColor = true;
            // 
            // datepickDatosEmpresa
            // 
            this.datepickDatosEmpresa.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.datepickDatosEmpresa.Location = new System.Drawing.Point(69, 33);
            this.datepickDatosEmpresa.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.datepickDatosEmpresa.Name = "datepickDatosEmpresa";
            this.datepickDatosEmpresa.Size = new System.Drawing.Size(331, 22);
            this.datepickDatosEmpresa.TabIndex = 12;
            // 
            // cboxSalario
            // 
            this.cboxSalario.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cboxSalario.FormattingEnabled = true;
            this.cboxSalario.Items.AddRange(new object[] {
            "Empleado",
            "Jefe departamento",
            "Director"});
            this.cboxSalario.Location = new System.Drawing.Point(69, 57);
            this.cboxSalario.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.cboxSalario.Name = "cboxSalario";
            this.cboxSalario.Size = new System.Drawing.Size(269, 22);
            this.cboxSalario.TabIndex = 11;
            this.cboxSalario.SelectedIndexChanged += new System.EventHandler(this.cboxSalario_SelectedIndexChanged_1);
            // 
            // lblPersonasCargo
            // 
            this.lblPersonasCargo.AutoSize = true;
            this.lblPersonasCargo.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPersonasCargo.Location = new System.Drawing.Point(21, 94);
            this.lblPersonasCargo.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblPersonasCargo.Name = "lblPersonasCargo";
            this.lblPersonasCargo.Size = new System.Drawing.Size(63, 14);
            this.lblPersonasCargo.TabIndex = 10;
            this.lblPersonasCargo.Text = "Personas a:";
            // 
            // lblSalario
            // 
            this.lblSalario.AutoSize = true;
            this.lblSalario.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSalario.Location = new System.Drawing.Point(21, 63);
            this.lblSalario.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblSalario.Name = "lblSalario";
            this.lblSalario.Size = new System.Drawing.Size(44, 14);
            this.lblSalario.TabIndex = 9;
            this.lblSalario.Text = "Salario:";
            // 
            // lblFechaEmpresa
            // 
            this.lblFechaEmpresa.AutoSize = true;
            this.lblFechaEmpresa.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblFechaEmpresa.Location = new System.Drawing.Point(21, 33);
            this.lblFechaEmpresa.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblFechaEmpresa.Name = "lblFechaEmpresa";
            this.lblFechaEmpresa.Size = new System.Drawing.Size(36, 14);
            this.lblFechaEmpresa.TabIndex = 8;
            this.lblFechaEmpresa.Text = "Fecha";
            // 
            // BtnAlta
            // 
            this.BtnAlta.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BtnAlta.Location = new System.Drawing.Point(24, 153);
            this.BtnAlta.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.BtnAlta.Name = "BtnAlta";
            this.BtnAlta.Size = new System.Drawing.Size(60, 33);
            this.BtnAlta.TabIndex = 1;
            this.BtnAlta.Text = "ALTA";
            this.BtnAlta.UseVisualStyleBackColor = true;
            this.BtnAlta.Click += new System.EventHandler(this.BtnAlta_Click);
            // 
            // BtnAbrirFichero
            // 
            this.BtnAbrirFichero.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BtnAbrirFichero.Location = new System.Drawing.Point(319, 20);
            this.BtnAbrirFichero.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.BtnAbrirFichero.Name = "BtnAbrirFichero";
            this.BtnAbrirFichero.Size = new System.Drawing.Size(84, 26);
            this.BtnAbrirFichero.TabIndex = 3;
            this.BtnAbrirFichero.Text = "Abrir fichero";
            this.BtnAbrirFichero.UseVisualStyleBackColor = true;
            this.BtnAbrirFichero.Click += new System.EventHandler(this.BtnAbrirFichero_Click);
            // 
            // btnGuardar
            // 
            this.btnGuardar.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnGuardar.Location = new System.Drawing.Point(419, 21);
            this.btnGuardar.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.btnGuardar.Name = "btnGuardar";
            this.btnGuardar.Size = new System.Drawing.Size(84, 26);
            this.btnGuardar.TabIndex = 4;
            this.btnGuardar.Text = "Guardar";
            this.btnGuardar.UseVisualStyleBackColor = true;
            this.btnGuardar.Click += new System.EventHandler(this.btnGuardar_Click);
            // 
            // lblRuta
            // 
            this.lblRuta.AutoSize = true;
            this.lblRuta.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblRuta.Location = new System.Drawing.Point(24, 25);
            this.lblRuta.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lblRuta.Name = "lblRuta";
            this.lblRuta.Size = new System.Drawing.Size(33, 14);
            this.lblRuta.TabIndex = 5;
            this.lblRuta.Text = "Ruta:";
            // 
            // txtBoxRuta
            // 
            this.txtBoxRuta.Font = new System.Drawing.Font("Calibri", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBoxRuta.Location = new System.Drawing.Point(63, 23);
            this.txtBoxRuta.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.txtBoxRuta.Name = "txtBoxRuta";
            this.txtBoxRuta.Size = new System.Drawing.Size(231, 22);
            this.txtBoxRuta.TabIndex = 6;
            this.txtBoxRuta.TextChanged += new System.EventHandler(this.txtBoxRuta_TextChanged);
            // 
            // OPFDialog
            // 
            this.OPFDialog.FileName = "openFileDialog1";
            // 
            // Datos
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(533, 437);
            this.Controls.Add(this.txtBoxRuta);
            this.Controls.Add(this.lblRuta);
            this.Controls.Add(this.btnGuardar);
            this.Controls.Add(this.BtnAbrirFichero);
            this.Controls.Add(this.gBoxDatosEmpresa);
            this.Controls.Add(this.gBoxCálculos);
            this.Controls.Add(this.gBoxDatosPersonales);
            this.Margin = new System.Windows.Forms.Padding(2, 2, 2, 2);
            this.Name = "Datos";
            this.Text = "Datos Personales";
            this.gBoxDatosPersonales.ResumeLayout(false);
            this.gBoxDatosPersonales.PerformLayout();
            this.gBoxCálculos.ResumeLayout(false);
            this.gBoxDatosEmpresa.ResumeLayout(false);
            this.gBoxDatosEmpresa.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownProducc)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownComerc)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownMante)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.nUpDownAdmin)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox gBoxDatosPersonales;
        private System.Windows.Forms.Label lblNombre;
        private System.Windows.Forms.GroupBox gBoxCálculos;
        private System.Windows.Forms.Button BtnAntiguedad;
        private System.Windows.Forms.Button BtnEdad;
        private System.Windows.Forms.GroupBox gBoxDatosEmpresa;
        private System.Windows.Forms.Button BtnAlta;
        private System.Windows.Forms.Button BtnAbrirFichero;
        private System.Windows.Forms.Button btnGuardar;
        private System.Windows.Forms.Label lblRuta;
        private System.Windows.Forms.Label lblApellidos;
        private System.Windows.Forms.DateTimePicker datepickDatosPersonales;
        private System.Windows.Forms.TextBox txtboxApellido;
        private System.Windows.Forms.TextBox txtboxNombre;
        private System.Windows.Forms.Label lblFecha;
        private System.Windows.Forms.NumericUpDown nUpDownProducc;
        private System.Windows.Forms.NumericUpDown nUpDownComerc;
        private System.Windows.Forms.NumericUpDown nUpDownMante;
        private System.Windows.Forms.NumericUpDown nUpDownAdmin;
        private System.Windows.Forms.CheckBox cboxProduccion;
        private System.Windows.Forms.CheckBox cboxComerciales;
        private System.Windows.Forms.CheckBox cboxMantenimiento;
        private System.Windows.Forms.CheckBox cboxAdministracion;
        private System.Windows.Forms.DateTimePicker datepickDatosEmpresa;
        private System.Windows.Forms.ComboBox cboxSalario;
        private System.Windows.Forms.Label lblPersonasCargo;
        private System.Windows.Forms.Label lblSalario;
        private System.Windows.Forms.Label lblFechaEmpresa;
        private System.Windows.Forms.TextBox txtBoxRuta;
        private System.Windows.Forms.TextBox txtbxsalario;
        private System.Windows.Forms.OpenFileDialog OPFDialog;
        private System.Windows.Forms.SaveFileDialog SFDialog;
    }
}