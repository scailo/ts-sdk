[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceCountReq

# Class: ProductionPlansServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ProductionPlansServiceCountReq

## Hierarchy

- `Message`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\>

  ↳ **`ProductionPlansServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProductionPlansServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionPlansServiceCountReq.md#approvedonend)
- [approvedOnStart](ProductionPlansServiceCountReq.md#approvedonstart)
- [approverRoleId](ProductionPlansServiceCountReq.md#approverroleid)
- [buyerClientId](ProductionPlansServiceCountReq.md#buyerclientid)
- [completedOnEnd](ProductionPlansServiceCountReq.md#completedonend)
- [completedOnStart](ProductionPlansServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ProductionPlansServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProductionPlansServiceCountReq.md#creationtimestampstart)
- [endsAtEnd](ProductionPlansServiceCountReq.md#endsatend)
- [endsAtStart](ProductionPlansServiceCountReq.md#endsatstart)
- [entityUuid](ProductionPlansServiceCountReq.md#entityuuid)
- [familyId](ProductionPlansServiceCountReq.md#familyid)
- [finalRefNumber](ProductionPlansServiceCountReq.md#finalrefnumber)
- [formData](ProductionPlansServiceCountReq.md#formdata)
- [isActive](ProductionPlansServiceCountReq.md#isactive)
- [locationId](ProductionPlansServiceCountReq.md#locationid)
- [modificationTimestampEnd](ProductionPlansServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductionPlansServiceCountReq.md#modificationtimestampstart)
- [projectId](ProductionPlansServiceCountReq.md#projectid)
- [refFrom](ProductionPlansServiceCountReq.md#reffrom)
- [refId](ProductionPlansServiceCountReq.md#refid)
- [referenceId](ProductionPlansServiceCountReq.md#referenceid)
- [startsAtEnd](ProductionPlansServiceCountReq.md#startsatend)
- [startsAtStart](ProductionPlansServiceCountReq.md#startsatstart)
- [status](ProductionPlansServiceCountReq.md#status)
- [supervisor](ProductionPlansServiceCountReq.md#supervisor)
- [fields](ProductionPlansServiceCountReq.md#fields)
- [runtime](ProductionPlansServiceCountReq.md#runtime)
- [typeName](ProductionPlansServiceCountReq.md#typename)

### Methods

- [clone](ProductionPlansServiceCountReq.md#clone)
- [equals](ProductionPlansServiceCountReq.md#equals)
- [fromBinary](ProductionPlansServiceCountReq.md#frombinary)
- [fromJson](ProductionPlansServiceCountReq.md#fromjson)
- [fromJsonString](ProductionPlansServiceCountReq.md#fromjsonstring)
- [getType](ProductionPlansServiceCountReq.md#gettype)
- [toBinary](ProductionPlansServiceCountReq.md#tobinary)
- [toJSON](ProductionPlansServiceCountReq.md#tojson)
- [toJson](ProductionPlansServiceCountReq.md#tojson-1)
- [toJsonString](ProductionPlansServiceCountReq.md#tojsonstring)
- [equals](ProductionPlansServiceCountReq.md#equals-1)
- [fromBinary](ProductionPlansServiceCountReq.md#frombinary-1)
- [fromJson](ProductionPlansServiceCountReq.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceCountReq**(`data?`): [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\> |

#### Returns

[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Overrides

Message\&lt;ProductionPlansServiceCountReq\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:2274](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2274)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/production_plans.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2107)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_end = 12;

#### Defined in

[src/production_plans.scailo_pb.ts:2091](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2091)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_start = 11;

#### Defined in

[src/production_plans.scailo_pb.ts:2075](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2075)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approver_role_id = 14;

#### Defined in

[src/production_plans.scailo_pb.ts:2123](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2123)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 80;

#### Defined in

[src/production_plans.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2265)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_end = 16;

#### Defined in

[src/production_plans.scailo_pb.ts:2155](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2155)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_start = 15;

#### Defined in

[src/production_plans.scailo_pb.ts:2139](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2139)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/production_plans.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1999)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/production_plans.scailo_pb.ts:1983](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1983)

___

### endsAtEnd

• **endsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "ends at"

**`Generated`**

from field: uint64 ends_at_end = 33;

#### Defined in

[src/production_plans.scailo_pb.ts:2243](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2243)

___

### endsAtStart

• **endsAtStart**: `bigint` = `protoInt64.zero`

The start range of "ends at"

**`Generated`**

from field: uint64 ends_at_start = 32;

#### Defined in

[src/production_plans.scailo_pb.ts:2236](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2236)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 8;

#### Defined in

[src/production_plans.scailo_pb.ts:2047](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2047)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 50;

#### Defined in

[src/production_plans.scailo_pb.ts:2250](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2250)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/production_plans.scailo_pb.ts:2187](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2187)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/production_plans.scailo_pb.ts:2272](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2272)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:1967](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L1967)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/production_plans.scailo_pb.ts:2208](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2208)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/production_plans.scailo_pb.ts:2031](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2031)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/production_plans.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2015)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 60;

#### Defined in

[src/production_plans.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2257)

___

### refFrom

• **refFrom**: [`PRODUCTION_PLAN_REF_FROM`](../enums/PRODUCTION_PLAN_REF_FROM.md) = `PRODUCTION_PLAN_REF_FROM.PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;

#### Defined in

[src/production_plans.scailo_pb.ts:2194](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2194)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/production_plans.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2201)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/production_plans.scailo_pb.ts:2171](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2171)

___

### startsAtEnd

• **startsAtEnd**: `bigint` = `protoInt64.zero`

The end range of "starts at"

**`Generated`**

from field: uint64 starts_at_end = 31;

#### Defined in

[src/production_plans.scailo_pb.ts:2229](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2229)

___

### startsAtStart

• **startsAtStart**: `bigint` = `protoInt64.zero`

The start range of "starts at"

**`Generated`**

from field: uint64 starts_at_start = 30;

#### Defined in

[src/production_plans.scailo_pb.ts:2222](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2222)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/production_plans.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2059)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_plans.scailo_pb.ts:2215](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2215)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:2281](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2281)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:2279](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2279)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceCountReq"``

#### Defined in

[src/production_plans.scailo_pb.ts:2280](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2280)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md) \| `PlainMessage`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md) \| `PlainMessage`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md) \| `PlainMessage`\<[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2323)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2311](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2311)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2315](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2315)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceCountReq`](ProductionPlansServiceCountReq.md)

#### Defined in

[src/production_plans.scailo_pb.ts:2319](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/production_plans.scailo_pb.ts#L2319)
