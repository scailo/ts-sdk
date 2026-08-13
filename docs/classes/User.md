[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / User

# Class: User

Represents a full User within the system.

**`Generated`**

from message Scailo.User

## Hierarchy

- `Message`\<[`User`](User.md)\>

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [address](User.md#address)
- [approvalMetadata](User.md#approvalmetadata)
- [attendanceUomId](User.md#attendanceuomid)
- [basicPayAmount](User.md#basicpayamount)
- [basicPayUomId](User.md#basicpayuomid)
- [birthday](User.md#birthday)
- [bloodGroup](User.md#bloodgroup)
- [city](User.md#city)
- [code](User.md#code)
- [country](User.md#country)
- [departmentId](User.md#departmentid)
- [email](User.md#email)
- [entityUuid](User.md#entityuuid)
- [formData](User.md#formdata)
- [joiningDate](User.md#joiningdate)
- [logs](User.md#logs)
- [metadata](User.md#metadata)
- [mfaStatus](User.md#mfastatus)
- [mobileRoleId](User.md#mobileroleid)
- [name](User.md#name)
- [payrollCurrencyId](User.md#payrollcurrencyid)
- [payrollGroupId](User.md#payrollgroupid)
- [payrollTaxGroupId](User.md#payrolltaxgroupid)
- [phone](User.md#phone)
- [pinCode](User.md#pincode)
- [roleId](User.md#roleid)
- [shiftGroupId](User.md#shiftgroupid)
- [state](User.md#state)
- [status](User.md#status)
- [userType](User.md#usertype)
- [username](User.md#username)
- [vaultFolderId](User.md#vaultfolderid)
- [workEmail](User.md#workemail)
- [fields](User.md#fields)
- [runtime](User.md#runtime)
- [typeName](User.md#typename)

### Methods

- [clone](User.md#clone)
- [equals](User.md#equals)
- [fromBinary](User.md#frombinary)
- [fromJson](User.md#fromjson)
- [fromJsonString](User.md#fromjsonstring)
- [getType](User.md#gettype)
- [toBinary](User.md#tobinary)
- [toJSON](User.md#tojson)
- [toJson](User.md#tojson-1)
- [toJsonString](User.md#tojsonstring)
- [equals](User.md#equals-1)
- [fromBinary](User.md#frombinary-1)
- [fromJson](User.md#fromjson-1)
- [fromJsonString](User.md#fromjsonstring-1)

## Constructors

### constructor

• **new User**(`data?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`User`](User.md)\> |

#### Returns

[`User`](User.md)

#### Overrides

Message\&lt;User\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:1538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1538)

## Properties

### address

• **address**: `string` = `""`

**`Description`**

Primary street details, building number, or geographic line matching residential or official mailing location records.

**`Example`**

```ts
"123 Business Park Drive, Suite 400"
```

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1388)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/users.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1242)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 attendance_uom_id = 51;

#### Defined in

[src/users.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1458)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

**`Description`**

The raw volume integer representing basic salary compensation. **Critical:** Value must be defined in the minor unit of the currency.

**`Example`**

```ts
500000
```

**`Generated`**

from field: uint64 basic_pay_amount = 56;

#### Defined in

[src/users.scailo_pb.ts:1508](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1508)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).

**`Example`**

```ts
701
```

**`Generated`**

from field: uint64 basic_pay_uom_id = 57;

#### Defined in

[src/users.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1518)

___

### birthday

• **birthday**: `string` = `""`

**`Description`**

The calendar date of birth of the user, primarily captured for verification workflows.

**`Example`**

```ts
"Mon Jan 02 2006"
```

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1368)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

**`Description`**

Medical identifier indicating the user's legal ABO blood group for emergency or corporate wellness logs.

**`Example`**

```ts
"O+"
```

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1438)

___

### city

• **city**: `string` = `""`

**`Description`**

The explicit city name corresponding to the user's primary residence or workplace assignment.

**`Example`**

```ts
"Austin"
```

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1398)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.

**`Example`**

```ts
"EMP-2026-992"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1298)

___

### country

• **country**: `string` = `""`

**`Description`**

The country code corresponding to the user's operational location.

**`Example`**

```ts
"US"
```

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1418)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.

**`Example`**

```ts
304
```

**`Generated`**

from field: uint64 department_id = 52;

#### Defined in

[src/users.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1468)

___

### email

• **email**: `string` = `""`

**`Description`**

The primary communication or routing email address where structural system notifications are dispatched.

**`Example`**

```ts
"jane.doe@example.com"
```

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1338)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/users.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1226)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 70;

#### Defined in

[src/users.scailo_pb.ts:1536](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1536)

___

### joiningDate

• **joiningDate**: `string` = `""`

**`Description`**

The formal start or contract initialization date marking when the individual officially joins the team roster.

**`Example`**

```ts
"Wed Oct 25 2023"
```

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1378)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/users.scailo_pb.ts:1258](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1258)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/users.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1234)

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

**`Description`**

Security flag determining whether Multi-Factor Authentication (MFA) has been explicitly provisioned and enabled for this user account.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool mfa_status = 60;

#### Defined in

[src/users.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1528)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of a secondary security role tailored exclusively for mobile application endpoints.

**`Example`**

```ts
2048
```

**`Generated`**

from field: uint64 mobile_role_id = 15;

#### Defined in

[src/users.scailo_pb.ts:1328](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1328)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or full legal name of the user as recognized on statutory documentation.

**`Example`**

```ts
"Jane Doe"
```

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users.scailo_pb.ts:1308](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1308)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

**`Description`**

The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.

**`Example`**

```ts
3
```

**`Generated`**

from field: uint64 payroll_currency_id = 55;

#### Defined in

[src/users.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1498)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.

**`Example`**

```ts
88
```

**`Generated`**

from field: uint64 payroll_group_id = 53;

#### Defined in

[src/users.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1478)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.

**`Example`**

```ts
19
```

**`Generated`**

from field: uint64 payroll_tax_group_id = 54;

#### Defined in

[src/users.scailo_pb.ts:1488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1488)

___

### phone

• **phone**: `string` = `""`

**`Description`**

The primary telephone contact or mobile line number assigned to the account profile.

**`Example`**

```ts
"+12125550123"
```

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1358)

___

### pinCode

• **pinCode**: `string` = `""`

**`Description`**

The standardized postal index number or geographic ZIP routing code.

**`Example`**

```ts
"78701"
```

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1428)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the primary web application access or RBAC security role.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1318)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.

**`Example`**

```ts
45
```

**`Generated`**

from field: uint64 shift_group_id = 50;

#### Defined in

[src/users.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1448)

___

### state

• **state**: `string` = `""`

**`Description`**

The administrative territory, province, state, or regional zone of residence.

**`Example`**

```ts
"Texas"
```

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1408)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/users.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1250)

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

**`Description`**

The categorical classification of the user entity determining their system scope and behavioral rules.

**`Example`**

```ts
USER_TYPE_EMPLOYEE
```

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1268)

___

### username

• **username**: `string` = `""`

**`Description`**

The unique system-level login alias used by the actor to authenticate against the platform.

**`Example`**

```ts
"jane.doe"
```

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1288)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/users.scailo_pb.ts:1278](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1278)

___

### workEmail

• **workEmail**: `string` = `""`

**`Description`**

A secondary, fallback, or corporate work email address for overlapping communication loops.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1348)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.User"``

#### Defined in

[src/users.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1544)

## Methods

### clone

▸ **clone**(): [`User`](User.md)

Create a deep copy.

#### Returns

[`User`](User.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`User`](User.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`User`](User.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |
| `b` | `undefined` \| [`User`](User.md) \| `PlainMessage`\<[`User`](User.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1593)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1581)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users.scailo_pb.ts:1585](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1585)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L1589)
