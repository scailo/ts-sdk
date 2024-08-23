[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceCountReq

# Class: PurchasesIndentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesIndentsServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

  ↳ **`PurchasesIndentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesIndentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesIndentsServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesIndentsServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesIndentsServiceCountReq.md#approverroleid)
- [completedOnEnd](PurchasesIndentsServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesIndentsServiceCountReq.md#completedonstart)
- [consigneeLocationId](PurchasesIndentsServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](PurchasesIndentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesIndentsServiceCountReq.md#creationtimestampstart)
- [deliveryDateEnd](PurchasesIndentsServiceCountReq.md#deliverydateend)
- [deliveryDateExact](PurchasesIndentsServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesIndentsServiceCountReq.md#deliverydatestart)
- [entityUuid](PurchasesIndentsServiceCountReq.md#entityuuid)
- [familyId](PurchasesIndentsServiceCountReq.md#familyid)
- [finalRefNumber](PurchasesIndentsServiceCountReq.md#finalrefnumber)
- [isActive](PurchasesIndentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesIndentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesIndentsServiceCountReq.md#modificationtimestampstart)
- [referenceId](PurchasesIndentsServiceCountReq.md#referenceid)
- [status](PurchasesIndentsServiceCountReq.md#status)
- [fields](PurchasesIndentsServiceCountReq.md#fields)
- [runtime](PurchasesIndentsServiceCountReq.md#runtime)
- [typeName](PurchasesIndentsServiceCountReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceCountReq.md#clone)
- [equals](PurchasesIndentsServiceCountReq.md#equals)
- [fromBinary](PurchasesIndentsServiceCountReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceCountReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceCountReq.md#gettype)
- [toBinary](PurchasesIndentsServiceCountReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceCountReq.md#tojson)
- [toJson](PurchasesIndentsServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceCountReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceCountReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceCountReq**(`data?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceCountReq\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:1663

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_indents.scailo_pb.ts:1591

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_indents.scailo_pb.ts:1584

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_indents.scailo_pb.ts:1577

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_indents.scailo_pb.ts:1598

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_indents.scailo_pb.ts:1612

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_indents.scailo_pb.ts:1605

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/purchases_indents.scailo_pb.ts:1654

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_indents.scailo_pb.ts:1542

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_indents.scailo_pb.ts:1535

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/purchases_indents.scailo_pb.ts:1633

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/purchases_indents.scailo_pb.ts:1619

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/purchases_indents.scailo_pb.ts:1626

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_indents.scailo_pb.ts:1563

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/purchases_indents.scailo_pb.ts:1661

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_indents.scailo_pb.ts:1647

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:1528

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_indents.scailo_pb.ts:1556

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_indents.scailo_pb.ts:1549

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_indents.scailo_pb.ts:1640

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:1570

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:1670

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:1668

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceCountReq"``

#### Defined in

src/purchases_indents.scailo_pb.ts:1669

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:1705

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1693

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1697

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1701
