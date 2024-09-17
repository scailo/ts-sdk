[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceFilterReq

# Class: PurchasesEnquiriesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

  ↳ **`PurchasesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesEnquiriesServiceFilterReq.md#approverroleid)
- [completedOnEnd](PurchasesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesEnquiriesServiceFilterReq.md#completedonstart)
- [count](PurchasesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PurchasesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesEnquiriesServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesEnquiriesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesEnquiriesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesEnquiriesServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesEnquiriesServiceFilterReq.md#offset)
- [priority](PurchasesEnquiriesServiceFilterReq.md#priority)
- [referenceId](PurchasesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](PurchasesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServiceFilterReq.md#sortorder)
- [status](PurchasesEnquiriesServiceFilterReq.md#status)
- [fields](PurchasesEnquiriesServiceFilterReq.md#fields)
- [runtime](PurchasesEnquiriesServiceFilterReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceFilterReq.md#clone)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceFilterReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceFilterReq**(`data?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1513

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1469

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1462

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1455

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1476

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1490

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1483

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1385

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1420

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1413

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1441

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1504

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1378

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1434

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1427

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1392

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1511

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1497

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1406

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1399

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1448

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1520

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1518

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceFilterReq"``

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1519

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1555

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1543

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1547

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1551
