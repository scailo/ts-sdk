[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VAULT\_ACCESS\_LOG\_OPERATION

# Enumeration: VAULT\_ACCESS\_LOG\_OPERATION

Describes the available access log operations

**`Generated`**

from enum Scailo.VAULT_ACCESS_LOG_OPERATION

## Table of contents

### Enumeration Members

- [VAULT\_ACCESS\_LOG\_OPERATION\_ANY\_UNSPECIFIED](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_any_unspecified)
- [VAULT\_ACCESS\_LOG\_OPERATION\_CREATE](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_create)
- [VAULT\_ACCESS\_LOG\_OPERATION\_DELETE](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_delete)
- [VAULT\_ACCESS\_LOG\_OPERATION\_DOWNLOAD](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_download)
- [VAULT\_ACCESS\_LOG\_OPERATION\_EXECUTE](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_execute)
- [VAULT\_ACCESS\_LOG\_OPERATION\_MOVE](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_move)
- [VAULT\_ACCESS\_LOG\_OPERATION\_PERMISSIONS](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_permissions)
- [VAULT\_ACCESS\_LOG\_OPERATION\_PERSISTENT](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_persistent)
- [VAULT\_ACCESS\_LOG\_OPERATION\_RENAME](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_rename)
- [VAULT\_ACCESS\_LOG\_OPERATION\_UNZIP](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_unzip)
- [VAULT\_ACCESS\_LOG\_OPERATION\_UPLOAD](VAULT_ACCESS_LOG_OPERATION.md#vault_access_log_operation_upload)

## Enumeration Members

### VAULT\_ACCESS\_LOG\_OPERATION\_ANY\_UNSPECIFIED

• **VAULT\_ACCESS\_LOG\_OPERATION\_ANY\_UNSPECIFIED** = ``0``

Ignore operation (useful only for search APIs)

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_ANY_UNSPECIFIED = 0;

#### Defined in

src/vault_commons.scailo_pb.ts:167

___

### VAULT\_ACCESS\_LOG\_OPERATION\_CREATE

• **VAULT\_ACCESS\_LOG\_OPERATION\_CREATE** = ``1``

Denotes that the user has created the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_CREATE = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:174

___

### VAULT\_ACCESS\_LOG\_OPERATION\_DELETE

• **VAULT\_ACCESS\_LOG\_OPERATION\_DELETE** = ``4``

Denotes that the user has deleted the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_DELETE = 4;

#### Defined in

src/vault_commons.scailo_pb.ts:195

___

### VAULT\_ACCESS\_LOG\_OPERATION\_DOWNLOAD

• **VAULT\_ACCESS\_LOG\_OPERATION\_DOWNLOAD** = ``5``

Denotes that the user has downloaded the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_DOWNLOAD = 5;

#### Defined in

src/vault_commons.scailo_pb.ts:202

___

### VAULT\_ACCESS\_LOG\_OPERATION\_EXECUTE

• **VAULT\_ACCESS\_LOG\_OPERATION\_EXECUTE** = ``10``

Denotes that the user is executing the resource (most likely a GiX app)

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_EXECUTE = 10;

#### Defined in

src/vault_commons.scailo_pb.ts:237

___

### VAULT\_ACCESS\_LOG\_OPERATION\_MOVE

• **VAULT\_ACCESS\_LOG\_OPERATION\_MOVE** = ``2``

Denotes that the user has moved the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_MOVE = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:181

___

### VAULT\_ACCESS\_LOG\_OPERATION\_PERMISSIONS

• **VAULT\_ACCESS\_LOG\_OPERATION\_PERMISSIONS** = ``9``

Denotes that the user is updating the permissions to a resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_PERMISSIONS = 9;

#### Defined in

src/vault_commons.scailo_pb.ts:230

___

### VAULT\_ACCESS\_LOG\_OPERATION\_PERSISTENT

• **VAULT\_ACCESS\_LOG\_OPERATION\_PERSISTENT** = ``8``

Denotes that the user has marked the resource as persistent

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_PERSISTENT = 8;

#### Defined in

src/vault_commons.scailo_pb.ts:223

___

### VAULT\_ACCESS\_LOG\_OPERATION\_RENAME

• **VAULT\_ACCESS\_LOG\_OPERATION\_RENAME** = ``3``

Denotes that the user has renamed the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_RENAME = 3;

#### Defined in

src/vault_commons.scailo_pb.ts:188

___

### VAULT\_ACCESS\_LOG\_OPERATION\_UNZIP

• **VAULT\_ACCESS\_LOG\_OPERATION\_UNZIP** = ``7``

Denotes that the user has begun unzipping the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_UNZIP = 7;

#### Defined in

src/vault_commons.scailo_pb.ts:216

___

### VAULT\_ACCESS\_LOG\_OPERATION\_UPLOAD

• **VAULT\_ACCESS\_LOG\_OPERATION\_UPLOAD** = ``6``

Denotes that the user has uploaded the resource

**`Generated`**

from enum value: VAULT_ACCESS_LOG_OPERATION_UPLOAD = 6;

#### Defined in

src/vault_commons.scailo_pb.ts:209
