[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceCountReq

# Class: GoodsDispatchesServiceCountReq

Target filter request for counting goods dispatch records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

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

[src/goods_dispatches.scailo_pb.ts:3489](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3489)

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

[src/goods_dispatches.scailo_pb.ts:3269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3269)

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

[src/goods_dispatches.scailo_pb.ts:3253](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3253)

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

[src/goods_dispatches.scailo_pb.ts:3237](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3237)

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

[src/goods_dispatches.scailo_pb.ts:3285](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3285)

___

### billingStatus

• `Optional` **billingStatus**: [`GOODS_DISPATCH_BILLING_STATUS`](../enums/GOODS_DISPATCH_BILLING_STATUS.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on their financial conversion lifecycle state—specifically, whether the physical shipment remains unbilled or has been successfully converted into a finalized Sales Invoice.

**`Example`**

```ts
GOODS_DISPATCH_BILLING_STATUS_UNBILLED
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_BILLING_STATUS enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_BILLING_STATUS billing_status = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3429](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3429)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the buyer client (the entity financially responsible) associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1051
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 buyer_client_id = 51;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3461)

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

[src/goods_dispatches.scailo_pb.ts:3317](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3317)

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

[src/goods_dispatches.scailo_pb.ts:3301](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3301)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the consignee client associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
1050
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 consignee_client_id = 50;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3445](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3445)

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

[src/goods_dispatches.scailo_pb.ts:3161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3161)

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

[src/goods_dispatches.scailo_pb.ts:3145](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3145)

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

[src/goods_dispatches.scailo_pb.ts:3209](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3209)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches that contain at least one line item belonging to this specific family ID.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 30;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3413](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3413)

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

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string final_ref_number = 21;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3349](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3349)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3487](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3487)

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

[src/goods_dispatches.scailo_pb.ts:3129](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3129)

___

### locationId

• `Optional` **locationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the physical location, warehouse, or fulfillment center from which these goods are being picked, packed, and dispatched.

**`Example`**

```ts
42
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 location_id = 25;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3397](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3397)

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

[src/goods_dispatches.scailo_pb.ts:3193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3193)

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

[src/goods_dispatches.scailo_pb.ts:3177](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3177)

___

### projectId

• `Optional` **projectId**: `bigint`

**`Optional`**

**`Description`**

Filter goods dispatches by the unique internal identifier of the project associated with the linked source document (e.g., Sales Order).

**`Example`**

```ts
88
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 project_id = 52;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3477](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3477)

___

### refFrom

• `Optional` **refFrom**: [`GOODS_DISPATCH_REF_FROM`](../enums/GOODS_DISPATCH_REF_FROM.md)

**`Optional`**

**`Description`**

Filter goods dispatches based on the specific module or record type from which the logistical fulfillment originated (e.g., Sales Order).

**`Example`**

```ts
GOODS_DISPATCH_REF_FROM_SALES_ORDER
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid GOODS_DISPATCH_REF_FROM enum value.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_REF_FROM ref_from = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3365](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3365)

___

### refId

• `Optional` **refId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the specific referenced source document (e.g., the ID of the actual Sales Order being evaluated).

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 ref_id = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3381](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3381)

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

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string reference_id = 20;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3333)

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

[src/goods_dispatches.scailo_pb.ts:3221](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3221)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3496](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3496)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3494](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3494)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceCountReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:3495](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3495)

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

[src/goods_dispatches.scailo_pb.ts:3535](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3535)

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

[src/goods_dispatches.scailo_pb.ts:3523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3523)

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

[src/goods_dispatches.scailo_pb.ts:3527](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3527)

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

[src/goods_dispatches.scailo_pb.ts:3531](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L3531)
