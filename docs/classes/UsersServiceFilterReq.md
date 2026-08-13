[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceFilterReq

# Class: UsersServiceFilterReq

Advanced filter request for searching and paginating users using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.UsersServiceFilterReq

## Hierarchy

- `Message`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

  ↳ **`UsersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](UsersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](UsersServiceFilterReq.md#approvedonend)
- [approvedOnStart](UsersServiceFilterReq.md#approvedonstart)
- [approverRoleId](UsersServiceFilterReq.md#approverroleid)
- [attendanceUomId](UsersServiceFilterReq.md#attendanceuomid)
- [basicPayUomId](UsersServiceFilterReq.md#basicpayuomid)
- [clientId](UsersServiceFilterReq.md#clientid)
- [code](UsersServiceFilterReq.md#code)
- [count](UsersServiceFilterReq.md#count)
- [creationTimestampEnd](UsersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](UsersServiceFilterReq.md#creationtimestampstart)
- [departmentId](UsersServiceFilterReq.md#departmentid)
- [email](UsersServiceFilterReq.md#email)
- [entityUuid](UsersServiceFilterReq.md#entityuuid)
- [formData](UsersServiceFilterReq.md#formdata)
- [includeFormData](UsersServiceFilterReq.md#includeformdata)
- [isActive](UsersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](UsersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](UsersServiceFilterReq.md#modificationtimestampstart)
- [name](UsersServiceFilterReq.md#name)
- [offset](UsersServiceFilterReq.md#offset)
- [payrollCurrencyId](UsersServiceFilterReq.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceFilterReq.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceFilterReq.md#payrolltaxgroupid)
- [phone](UsersServiceFilterReq.md#phone)
- [roleId](UsersServiceFilterReq.md#roleid)
- [shiftGroupId](UsersServiceFilterReq.md#shiftgroupid)
- [sortKey](UsersServiceFilterReq.md#sortkey)
- [sortOrder](UsersServiceFilterReq.md#sortorder)
- [status](UsersServiceFilterReq.md#status)
- [userType](UsersServiceFilterReq.md#usertype)
- [username](UsersServiceFilterReq.md#username)
- [vendorId](UsersServiceFilterReq.md#vendorid)
- [workEmail](UsersServiceFilterReq.md#workemail)
- [fields](UsersServiceFilterReq.md#fields)
- [runtime](UsersServiceFilterReq.md#runtime)
- [typeName](UsersServiceFilterReq.md#typename)

### Methods

- [clone](UsersServiceFilterReq.md#clone)
- [equals](UsersServiceFilterReq.md#equals)
- [fromBinary](UsersServiceFilterReq.md#frombinary)
- [fromJson](UsersServiceFilterReq.md#fromjson)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring)
- [getType](UsersServiceFilterReq.md#gettype)
- [toBinary](UsersServiceFilterReq.md#tobinary)
- [toJSON](UsersServiceFilterReq.md#tojson)
- [toJson](UsersServiceFilterReq.md#tojson-1)
- [toJsonString](UsersServiceFilterReq.md#tojsonstring)
- [equals](UsersServiceFilterReq.md#equals-1)
- [fromBinary](UsersServiceFilterReq.md#frombinary-1)
- [fromJson](UsersServiceFilterReq.md#fromjson-1)
- [fromJsonString](UsersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceFilterReq**(`data?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Overrides

Message\&lt;UsersServiceFilterReq\&gt;.constructor

#### Defined in

[src/users.scailo_pb.ts:2505](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2505)

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

[src/users.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2206)

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

[src/users.scailo_pb.ts:2190](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2190)

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

[src/users.scailo_pb.ts:2174](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2174)

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

[src/users.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2222)

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

[src/users.scailo_pb.ts:2350](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2350)

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

[src/users.scailo_pb.ts:2430](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2430)

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

[src/users.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2480)

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

[src/users.scailo_pb.ts:2270](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2270)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/users.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2016)

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

[src/users.scailo_pb.ts:2086](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2086)

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

[src/users.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2070)

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

[src/users.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2366)

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

[src/users.scailo_pb.ts:2286](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2286)

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

[src/users.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2146)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/users.scailo_pb.ts:2490](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2490)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/users.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2503)

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

[src/users.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2000)

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

[src/users.scailo_pb.ts:2118](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2118)

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

[src/users.scailo_pb.ts:2102](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2102)

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

[src/users.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2254)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/users.scailo_pb.ts:2032](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2032)

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

[src/users.scailo_pb.ts:2414](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2414)

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

[src/users.scailo_pb.ts:2382](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2382)

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

[src/users.scailo_pb.ts:2398](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2398)

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

[src/users.scailo_pb.ts:2302](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2302)

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

[src/users.scailo_pb.ts:2318](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2318)

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

[src/users.scailo_pb.ts:2334](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2334)

___

### sortKey

• `Optional` **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.USER_SORT_KEY sort_key = 5;

#### Defined in

[src/users.scailo_pb.ts:2054](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2054)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/users.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2044)

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

[src/users.scailo_pb.ts:2158](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2158)

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

[src/users.scailo_pb.ts:2130](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2130)

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

[src/users.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2238)

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

[src/users.scailo_pb.ts:2462](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2462)

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

[src/users.scailo_pb.ts:2446](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2446)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2512)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users.scailo_pb.ts:2510](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2510)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceFilterReq"``

#### Defined in

[src/users.scailo_pb.ts:2511](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2511)

## Methods

### clone

▸ **clone**(): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`UsersServiceFilterReq`](UsersServiceFilterReq.md) \| `PlainMessage`\<[`UsersServiceFilterReq`](UsersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users.scailo_pb.ts:2561](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2561)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users.scailo_pb.ts:2549](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2549)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users.scailo_pb.ts:2553](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2553)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceFilterReq`](UsersServiceFilterReq.md)

#### Defined in

[src/users.scailo_pb.ts:2557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/users.scailo_pb.ts#L2557)
