[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceCountReq

# Class: PurchasesEnquiriesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

  ↳ **`PurchasesEnquiriesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesEnquiriesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesEnquiriesServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesEnquiriesServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesEnquiriesServiceCountReq.md#approverroleid)
- [completedOnEnd](PurchasesEnquiriesServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesEnquiriesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PurchasesEnquiriesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesEnquiriesServiceCountReq.md#creationtimestampstart)
- [entityUuid](PurchasesEnquiriesServiceCountReq.md#entityuuid)
- [finalRefNumber](PurchasesEnquiriesServiceCountReq.md#finalrefnumber)
- [isActive](PurchasesEnquiriesServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesEnquiriesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesEnquiriesServiceCountReq.md#modificationtimestampstart)
- [priority](PurchasesEnquiriesServiceCountReq.md#priority)
- [referenceId](PurchasesEnquiriesServiceCountReq.md#referenceid)
- [status](PurchasesEnquiriesServiceCountReq.md#status)
- [fields](PurchasesEnquiriesServiceCountReq.md#fields)
- [runtime](PurchasesEnquiriesServiceCountReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceCountReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceCountReq.md#clone)
- [equals](PurchasesEnquiriesServiceCountReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceCountReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceCountReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceCountReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceCountReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceCountReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceCountReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceCountReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceCountReq**(`data?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceCountReq\&gt;.constructor

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1679

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1635

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1628

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1621

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1642

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1656

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1649

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1586

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1579

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1607

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1670

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1572

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1600

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1593

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1677

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1663

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1614

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1686

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1684

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceCountReq"``

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1685

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1717

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1705

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1709

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1713
