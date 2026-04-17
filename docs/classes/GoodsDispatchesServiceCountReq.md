[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceCountReq

# Class: GoodsDispatchesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.GoodsDispatchesServiceCountReq

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\>

  ↳ **`GoodsDispatchesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](GoodsDispatchesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](GoodsDispatchesServiceCountReq.md#approvedonend)
- [approvedOnStart](GoodsDispatchesServiceCountReq.md#approvedonstart)
- [approverRoleId](GoodsDispatchesServiceCountReq.md#approverroleid)
- [billingStatus](GoodsDispatchesServiceCountReq.md#billingstatus)
- [buyerClientId](GoodsDispatchesServiceCountReq.md#buyerclientid)
- [completedOnEnd](GoodsDispatchesServiceCountReq.md#completedonend)
- [completedOnStart](GoodsDispatchesServiceCountReq.md#completedonstart)
- [consigneeClientId](GoodsDispatchesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](GoodsDispatchesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](GoodsDispatchesServiceCountReq.md#creationtimestampstart)
- [entityUuid](GoodsDispatchesServiceCountReq.md#entityuuid)
- [familyId](GoodsDispatchesServiceCountReq.md#familyid)
- [finalRefNumber](GoodsDispatchesServiceCountReq.md#finalrefnumber)
- [formData](GoodsDispatchesServiceCountReq.md#formdata)
- [isActive](GoodsDispatchesServiceCountReq.md#isactive)
- [locationId](GoodsDispatchesServiceCountReq.md#locationid)
- [modificationTimestampEnd](GoodsDispatchesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](GoodsDispatchesServiceCountReq.md#modificationtimestampstart)
- [projectId](GoodsDispatchesServiceCountReq.md#projectid)
- [refFrom](GoodsDispatchesServiceCountReq.md#reffrom)
- [refId](GoodsDispatchesServiceCountReq.md#refid)
- [referenceId](GoodsDispatchesServiceCountReq.md#referenceid)
- [status](GoodsDispatchesServiceCountReq.md#status)
- [fields](GoodsDispatchesServiceCountReq.md#fields)
- [runtime](GoodsDispatchesServiceCountReq.md#runtime)
- [typeName](GoodsDispatchesServiceCountReq.md#typename)

### Methods

- [clone](GoodsDispatchesServiceCountReq.md#clone)
- [equals](GoodsDispatchesServiceCountReq.md#equals)
- [fromBinary](GoodsDispatchesServiceCountReq.md#frombinary)
- [fromJson](GoodsDispatchesServiceCountReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceCountReq.md#fromjsonstring)
- [getType](GoodsDispatchesServiceCountReq.md#gettype)
- [toBinary](GoodsDispatchesServiceCountReq.md#tobinary)
- [toJSON](GoodsDispatchesServiceCountReq.md#tojson)
- [toJson](GoodsDispatchesServiceCountReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceCountReq.md#tojsonstring)
- [equals](GoodsDispatchesServiceCountReq.md#equals-1)
- [fromBinary](GoodsDispatchesServiceCountReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceCountReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceCountReq**(`data?`): [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\> |

#### Returns

[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceCountReq\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2689](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2689)

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

[src/goods_dispatches.scailo_pb.ts:2543](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2543)

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

[src/goods_dispatches.scailo_pb.ts:2527](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2527)

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

[src/goods_dispatches.scailo_pb.ts:2511](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2511)

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

[src/goods_dispatches.scailo_pb.ts:2559](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2559)

___

### billingStatus

• **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md) = `GOODS_DISPATCH_BILLING_STATUS.GOODS_DISPATCH_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the goods dispatch bill

**`Generated`**

from field: Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2658](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2658)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2673](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2673)

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

[src/goods_dispatches.scailo_pb.ts:2591](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2591)

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

[src/goods_dispatches.scailo_pb.ts:2575](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2575)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2666](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2666)

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

[src/goods_dispatches.scailo_pb.ts:2435](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2435)

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

[src/goods_dispatches.scailo_pb.ts:2419](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2419)

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

[src/goods_dispatches.scailo_pb.ts:2483](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2483)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2651](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2651)

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

[src/goods_dispatches.scailo_pb.ts:2623](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2623)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2687](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2687)

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

[src/goods_dispatches.scailo_pb.ts:2403](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2403)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2644](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2644)

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

[src/goods_dispatches.scailo_pb.ts:2467](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2467)

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

[src/goods_dispatches.scailo_pb.ts:2451](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2451)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2680](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2680)

___

### refFrom

• **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md) = `GOODS_DISPATCH_REF_FROM.GOODS_DISPATCH_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2630](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2630)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2637](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2637)

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

[src/goods_dispatches.scailo_pb.ts:2607](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2607)

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

[src/goods_dispatches.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2495)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2696](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2696)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2694](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2694)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceCountReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2695](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2695)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md) \| `PlainMessage`\<[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2735](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2735)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2723](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2723)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2727](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2727)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceCountReq`](GoodsDispatchesServiceCountReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2731](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L2731)
