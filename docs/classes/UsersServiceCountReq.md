[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceCountReq

# Class: UsersServiceCountReq

Target filter request for counting user records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.UsersServiceCountReq

## Hierarchy

- `Message`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

  ↳ **`UsersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceCountReq.md#approvedonend)
- [approvedOnStart](UsersServiceCountReq.md#approvedonstart)
- [approverRoleId](UsersServiceCountReq.md#approverroleid)
- [attendanceUomId](UsersServiceCountReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceCountReq.md#basicpayuomid)
- [clientId](UsersServiceCountReq.md#clientid)
- [code](UsersServiceCountReq.md#code)
- [creationTimestampEnd](UsersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceCountReq.md#creationtimestampstart)
- [departmentId](UsersServiceCountReq.md#departmentid)
- [email](UsersServiceCountReq.md#email)
- [entityUuid](UsersServiceCountReq.md#entityuuid)
- [formData](UsersServiceCountReq.md#formdata)
- [isActive](UsersServiceCountReq.md#isactive)
- [modificationTimestampEnd](UsersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UsersServiceCountReq.md#modificationtimestampstart)
- [name](UsersServiceCountReq.md#name)
- [payrollCurrencyId](UsersServiceCountReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceCountReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceCountReq.md#payrolltaxgroupid)
- [phone](UsersServiceCountReq.md#phone)
- [roleId](UsersServiceCountReq.md#roleid)
- [shiftGroupId](UsersServiceCountReq.md#shiftgroupid)
- [status](UsersServiceCountReq.md#status)
- [userType](UsersServiceCountReq.md#usertype)
- [username](UsersServiceCountReq.md#username)
- [vendorId](UsersServiceCountReq.md#vendorid)
- [workEmail](UsersServiceCountReq.md#workemail)
- [fields](UsersServiceCountReq.md#fields)
- [runtime](UsersServiceCountReq.md#runtime)
- [typeName](UsersServiceCountReq.md#typename)

### Methods

- [clone](UsersServiceCountReq.md#clone)
- [equals](UsersServiceCountReq.md#equals)
- [fromBinary](UsersServiceCountReq.md#frombinary)
- [fromJson](UsersServiceCountReq.md#fromjson)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring)
- [getType](UsersServiceCountReq.md#gettype)
- [toBinary](UsersServiceCountReq.md#tobinary)
- [toJSON](UsersServiceCountReq.md#tojson)
- [toJson](UsersServiceCountReq.md#tojson-1)
- [toJsonString](UsersServiceCountReq.md#tojsonstring)
- [equals](UsersServiceCountReq.md#equals-1)
- [fromBinary](UsersServiceCountReq.md#frombinary-1)
- [fromJson](UsersServiceCountReq.md#fromjson-1)
- [fromJsonString](UsersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceCountReq**(`data?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Overrides

Message\&lt;UsersServiceCountReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:3027](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3027)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/users.scailo_pb.ts:2741](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2741)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/users.scailo_pb.ts:2725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2725)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/users.scailo_pb.ts:2709](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2709)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/users.scailo_pb.ts:2757](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2757)

___

### attendanceUomId

• `Optional` **attendanceUomId**: `bigint`

**`Optional`**

**`Description`**

The internal Unit of Measure (UOM) tracking ID used to evaluate time structures, shifts, or active work hour configurations.

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unallocated.

**`Generated`**

from field: optional uint64 attendance_uom_id = 27;

#### Defined in

[src/users.scailo_pb.ts:2885](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2885)

___

### basicPayUomId

• `Optional` **basicPayUomId**: `bigint`

**`Optional`**

**`Description`**

The internal Unit of Measure (UOM) tracking ID applied to contextualize basic pay duration distributions (e.g., Per Month, Per Annum).

**`Example`**

```ts
701
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 basic_pay_uom_id = 32;

#### Defined in

[src/users.scailo_pb.ts:2965](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2965)

___

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the users associated with or belonging to a specific external Client profile.

**`Example`**

```ts
9107
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

--------------------------------------------------------------------------------

**`Generated`**

from field: optional uint64 client_id = 71;

#### Defined in

[src/users.scailo_pb.ts:3015](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3015)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique internal enterprise code assigned to the individual, utilized for cross-referencing external platforms.

**`Example`**

```ts
"EMP-2026-992"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 22;

#### Defined in

[src/users.scailo_pb.ts:2805](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2805)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/users.scailo_pb.ts:2621](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2621)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/users.scailo_pb.ts:2605](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2605)

___

### departmentId

• `Optional` **departmentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal sequence identifier of the corporate Department or business unit to which the user is structurally assigned.

**`Example`**

```ts
304
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 for general or unassigned staff vectors.

**`Generated`**

from field: optional uint64 department_id = 28;

#### Defined in

[src/users.scailo_pb.ts:2901](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2901)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication or routing email address where structural system notifications are dispatched.

**`Example`**

```ts
"jane.doe@example.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a structurally sound and valid email address string.

**`Generated`**

from field: optional string email = 23;

#### Defined in

[src/users.scailo_pb.ts:2821](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2821)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 8;

#### Defined in

[src/users.scailo_pb.ts:2681](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2681)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/users.scailo_pb.ts:3025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3025)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/users.scailo_pb.ts:2589](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2589)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/users.scailo_pb.ts:2653](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2653)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/users.scailo_pb.ts:2637](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2637)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or full legal name of the user as recognized on statutory documentation.

**`Example`**

```ts
"Jane Doe"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 21;

#### Defined in

[src/users.scailo_pb.ts:2789](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2789)

___

### payrollCurrencyId

• `Optional` **payrollCurrencyId**: `bigint`

**`Optional`**

**`Description`**

The internal identifier matching the currency context in which the user's base salary and line compensation amounts are denominated.

**`Example`**

```ts
3
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 payroll_currency_id = 31;

#### Defined in

[src/users.scailo_pb.ts:2949](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2949)

___

### payrollGroupId

• `Optional` **payrollGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the designated payroll distribution group used for localized batch processing and compensation disbursement.

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unassigned.

**`Generated`**

from field: optional uint64 payroll_group_id = 29;

#### Defined in

[src/users.scailo_pb.ts:2917](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2917)

___

### payrollTaxGroupId

• `Optional` **payrollTaxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the tax matrix or statutory configuration rule governing payroll deductions.

**`Example`**

```ts
19
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if no deductions are assigned.

**`Generated`**

from field: optional uint64 payroll_tax_group_id = 30;

#### Defined in

[src/users.scailo_pb.ts:2933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2933)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary telephone contact or mobile line number assigned to the account profile.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.*

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string phone = 24;

#### Defined in

[src/users.scailo_pb.ts:2837](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2837)

___

### roleId

• `Optional` **roleId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the primary web application access or RBAC security role.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: optional uint64 role_id = 25;

#### Defined in

[src/users.scailo_pb.ts:2853](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2853)

___

### shiftGroupId

• `Optional` **shiftGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the operational work shift group mapped to this account profile for scheduling and timecard verification.

**`Example`**

```ts
45
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer. Defaults to 0 if unallocated.

**`Generated`**

from field: optional uint64 shift_group_id = 26;

#### Defined in

[src/users.scailo_pb.ts:2869](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2869)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/users.scailo_pb.ts:2693](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2693)

___

### userType

• `Optional` **userType**: [`USER_TYPE`](../enums/USER_TYPE.md)

**`Optional`**

**`Description`**

The categorical classification of the user entity determining their system scope and behavioral rules.

**`Example`**

```ts
USER_TYPE_EMPLOYEE
```

**`Generated`**

from field: optional Scailo.USER_TYPE user_type = 7;

#### Defined in

[src/users.scailo_pb.ts:2665](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2665)

___

### username

• `Optional` **username**: `string`

**`Optional`**

**`Description`**

The unique system-level login alias used by the actor to authenticate against the platform.

**`Example`**

```ts
"jane.doe"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string and completely unique across the given business entity space.

**`Generated`**

from field: optional string username = 20;

#### Defined in

[src/users.scailo_pb.ts:2773](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2773)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the users associated with or belonging to a specific external Vendor profile.

**`Example`**

```ts
5402
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 vendor_id = 70;

#### Defined in

[src/users.scailo_pb.ts:2997](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2997)

___

### workEmail

• `Optional` **workEmail**: `string`

**`Optional`**

**`Description`**

A secondary, fallback, or corporate work email address for overlapping communication loops.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string work_email = 33;

#### Defined in

[src/users.scailo_pb.ts:2981](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L2981)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:3034](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3034)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:3032](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3032)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceCountReq"``

#### Defined in

[src/users.scailo_pb.ts:3033](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3033)

## Methods

### clone

▸ **clone**(): [`UsersServiceCountReq`](UsersServiceCountReq.md)

Create a deep copy.

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |
| `b` | `undefined` \| [`UsersServiceCountReq`](UsersServiceCountReq.md) \| `PlainMessage`\<[`UsersServiceCountReq`](UsersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:3078](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3078)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:3066](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3066)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:3070](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3070)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceCountReq`](UsersServiceCountReq.md)

#### Defined in

[src/users.scailo_pb.ts:3074](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L3074)
