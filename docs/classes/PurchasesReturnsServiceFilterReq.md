[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceFilterReq

# Class: PurchasesReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\>

  ↳ **`PurchasesReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesReturnsServiceFilterReq.md#approverroleid)
- [billingStatus](PurchasesReturnsServiceFilterReq.md#billingstatus)
- [completedOnEnd](PurchasesReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesReturnsServiceFilterReq.md#completedonstart)
- [count](PurchasesReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PurchasesReturnsServiceFilterReq.md#entityuuid)
- [familyId](PurchasesReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](PurchasesReturnsServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesReturnsServiceFilterReq.md#isactive)
- [locationId](PurchasesReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](PurchasesReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesReturnsServiceFilterReq.md#offset)
- [projectId](PurchasesReturnsServiceFilterReq.md#projectid)
- [refFrom](PurchasesReturnsServiceFilterReq.md#reffrom)
- [refId](PurchasesReturnsServiceFilterReq.md#refid)
- [referenceId](PurchasesReturnsServiceFilterReq.md#referenceid)
- [sortKey](PurchasesReturnsServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesReturnsServiceFilterReq.md#sortorder)
- [status](PurchasesReturnsServiceFilterReq.md#status)
- [vendorId](PurchasesReturnsServiceFilterReq.md#vendorid)
- [fields](PurchasesReturnsServiceFilterReq.md#fields)
- [runtime](PurchasesReturnsServiceFilterReq.md#runtime)
- [typeName](PurchasesReturnsServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesReturnsServiceFilterReq.md#clone)
- [equals](PurchasesReturnsServiceFilterReq.md#equals)
- [fromBinary](PurchasesReturnsServiceFilterReq.md#frombinary)
- [fromJson](PurchasesReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesReturnsServiceFilterReq.md#gettype)
- [toBinary](PurchasesReturnsServiceFilterReq.md#tobinary)
- [toJSON](PurchasesReturnsServiceFilterReq.md#tojson)
- [toJson](PurchasesReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceFilterReq.md#tojsonstring)
- [equals](PurchasesReturnsServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceFilterReq**(`data?`): [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\> |

#### Returns

[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceFilterReq\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:1732

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_returns.scailo_pb.ts:1646

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_returns.scailo_pb.ts:1639

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_returns.scailo_pb.ts:1632

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_returns.scailo_pb.ts:1653

___

### billingStatus

• **billingStatus**: [`PURCHASE_RETURN_BILLING_STATUS`](../enums/PURCHASE_RETURN_BILLING_STATUS.md) = `PURCHASE_RETURN_BILLING_STATUS.PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the purchase return bill

**`Generated`**

from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

src/purchases_returns.scailo_pb.ts:1709

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_returns.scailo_pb.ts:1667

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_returns.scailo_pb.ts:1660

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:1562

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_returns.scailo_pb.ts:1597

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_returns.scailo_pb.ts:1590

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_returns.scailo_pb.ts:1618

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 60;

#### Defined in

src/purchases_returns.scailo_pb.ts:1730

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_returns.scailo_pb.ts:1681

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:1555

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/purchases_returns.scailo_pb.ts:1702

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_returns.scailo_pb.ts:1611

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_returns.scailo_pb.ts:1604

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_returns.scailo_pb.ts:1569

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 51;

#### Defined in

src/purchases_returns.scailo_pb.ts:1723

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/purchases_returns.scailo_pb.ts:1688

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/purchases_returns.scailo_pb.ts:1695

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_returns.scailo_pb.ts:1674

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_SORT_KEY`](../enums/PURCHASE_RETURN_SORT_KEY.md) = `PURCHASE_RETURN_SORT_KEY.PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_returns.scailo_pb.ts:1583

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_returns.scailo_pb.ts:1576

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:1625

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

src/purchases_returns.scailo_pb.ts:1716

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:1739

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:1737

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceFilterReq"``

#### Defined in

src/purchases_returns.scailo_pb.ts:1738

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:1780

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1768

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1772

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceFilterReq`](PurchasesReturnsServiceFilterReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1776
