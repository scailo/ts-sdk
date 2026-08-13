[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceCountReq

# Class: ProjectsServiceCountReq

Target filter request for counting project records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.ProjectsServiceCountReq

## Hierarchy

- `Message`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

  ↳ **`ProjectsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProjectsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProjectsServiceCountReq.md#approvedonend)
- [approvedOnStart](ProjectsServiceCountReq.md#approvedonstart)
- [approverRoleId](ProjectsServiceCountReq.md#approverroleid)
- [clientId](ProjectsServiceCountReq.md#clientid)
- [completedOnEnd](ProjectsServiceCountReq.md#completedonend)
- [completedOnStart](ProjectsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ProjectsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProjectsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ProjectsServiceCountReq.md#entityuuid)
- [finalRefNumber](ProjectsServiceCountReq.md#finalrefnumber)
- [formData](ProjectsServiceCountReq.md#formdata)
- [inwardJobId](ProjectsServiceCountReq.md#inwardjobid)
- [isActive](ProjectsServiceCountReq.md#isactive)
- [meetingId](ProjectsServiceCountReq.md#meetingid)
- [modificationTimestampEnd](ProjectsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProjectsServiceCountReq.md#modificationtimestampstart)
- [outwardJobId](ProjectsServiceCountReq.md#outwardjobid)
- [productionPlanId](ProjectsServiceCountReq.md#productionplanid)
- [purchaseOrderId](ProjectsServiceCountReq.md#purchaseorderid)
- [referenceId](ProjectsServiceCountReq.md#referenceid)
- [salesOrderId](ProjectsServiceCountReq.md#salesorderid)
- [status](ProjectsServiceCountReq.md#status)
- [fields](ProjectsServiceCountReq.md#fields)
- [runtime](ProjectsServiceCountReq.md#runtime)
- [typeName](ProjectsServiceCountReq.md#typename)

### Methods

- [clone](ProjectsServiceCountReq.md#clone)
- [equals](ProjectsServiceCountReq.md#equals)
- [fromBinary](ProjectsServiceCountReq.md#frombinary)
- [fromJson](ProjectsServiceCountReq.md#fromjson)
- [fromJsonString](ProjectsServiceCountReq.md#fromjsonstring)
- [getType](ProjectsServiceCountReq.md#gettype)
- [toBinary](ProjectsServiceCountReq.md#tobinary)
- [toJSON](ProjectsServiceCountReq.md#tojson)
- [toJson](ProjectsServiceCountReq.md#tojson-1)
- [toJsonString](ProjectsServiceCountReq.md#tojsonstring)
- [equals](ProjectsServiceCountReq.md#equals-1)
- [fromBinary](ProjectsServiceCountReq.md#frombinary-1)
- [fromJson](ProjectsServiceCountReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceCountReq**(`data?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Overrides

Message\&lt;ProjectsServiceCountReq\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1736)

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

[src/projects.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1532)

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

[src/projects.scailo_pb.ts:1516](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1516)

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

[src/projects.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1500)

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

[src/projects.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1548)

___

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific client. Explicitly set to `-1` to bypass this filter and return all client records. `0` acts as a valid, concrete filter ID.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

64-bit integer that with a minimum value of -1.

**`Generated`**

from field: optional int64 client_id = 22;

#### Defined in

[src/projects.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1628)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/projects.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1580)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/projects.scailo_pb.ts:1564](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1564)

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

[src/projects.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1424)

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

[src/projects.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1408)

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

[src/projects.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1472)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string final_ref_number = 21;

#### Defined in

[src/projects.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1612)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/projects.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1734)

___

### inwardJobId

• `Optional` **inwardJobId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific inward job. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 inward_job_id = 43;

#### Defined in

[src/projects.scailo_pb.ts:1692](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1692)

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

[src/projects.scailo_pb.ts:1392](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1392)

___

### meetingId

• `Optional` **meetingId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific meeting. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 meeting_id = 45;

#### Defined in

[src/projects.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1724)

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

[src/projects.scailo_pb.ts:1456](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1456)

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

[src/projects.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1440)

___

### outwardJobId

• `Optional` **outwardJobId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific outward job. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 outward_job_id = 42;

#### Defined in

[src/projects.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1676)

___

### productionPlanId

• `Optional` **productionPlanId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific production plan. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 production_plan_id = 44;

#### Defined in

[src/projects.scailo_pb.ts:1708](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1708)

___

### purchaseOrderId

• `Optional` **purchaseOrderId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific purchase order. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 purchase_order_id = 41;

#### Defined in

[src/projects.scailo_pb.ts:1660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1660)

___

### referenceId

• `Optional` **referenceId**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string reference_id = 20;

#### Defined in

[src/projects.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1596)

___

### salesOrderId

• `Optional` **salesOrderId**: `bigint`

**`Optional`**

**`Description`**

Filter projects assigned to a specific sales order. Ignored if set to 0.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 sales_order_id = 40;

#### Defined in

[src/projects.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1644)

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

[src/projects.scailo_pb.ts:1484](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1484)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:1743](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1743)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:1741](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1741)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceCountReq"``

#### Defined in

[src/projects.scailo_pb.ts:1742](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1742)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md) \| `PlainMessage`\<[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1781)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1769)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1773)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCountReq`](ProjectsServiceCountReq.md)

#### Defined in

[src/projects.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1777)
