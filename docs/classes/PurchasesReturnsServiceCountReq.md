[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceCountReq

# Class: PurchasesReturnsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesReturnsServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\>

  ↳ **`PurchasesReturnsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesReturnsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesReturnsServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesReturnsServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesReturnsServiceCountReq.md#approverroleid)
- [billingStatus](PurchasesReturnsServiceCountReq.md#billingstatus)
- [completedOnEnd](PurchasesReturnsServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesReturnsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PurchasesReturnsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesReturnsServiceCountReq.md#creationtimestampstart)
- [entityUuid](PurchasesReturnsServiceCountReq.md#entityuuid)
- [familyId](PurchasesReturnsServiceCountReq.md#familyid)
- [finalRefNumber](PurchasesReturnsServiceCountReq.md#finalrefnumber)
- [isActive](PurchasesReturnsServiceCountReq.md#isactive)
- [locationId](PurchasesReturnsServiceCountReq.md#locationid)
- [modificationTimestampEnd](PurchasesReturnsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesReturnsServiceCountReq.md#modificationtimestampstart)
- [projectId](PurchasesReturnsServiceCountReq.md#projectid)
- [refFrom](PurchasesReturnsServiceCountReq.md#reffrom)
- [refId](PurchasesReturnsServiceCountReq.md#refid)
- [referenceId](PurchasesReturnsServiceCountReq.md#referenceid)
- [status](PurchasesReturnsServiceCountReq.md#status)
- [vendorId](PurchasesReturnsServiceCountReq.md#vendorid)
- [fields](PurchasesReturnsServiceCountReq.md#fields)
- [runtime](PurchasesReturnsServiceCountReq.md#runtime)
- [typeName](PurchasesReturnsServiceCountReq.md#typename)

### Methods

- [clone](PurchasesReturnsServiceCountReq.md#clone)
- [equals](PurchasesReturnsServiceCountReq.md#equals)
- [fromBinary](PurchasesReturnsServiceCountReq.md#frombinary)
- [fromJson](PurchasesReturnsServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceCountReq.md#fromjsonstring)
- [getType](PurchasesReturnsServiceCountReq.md#gettype)
- [toBinary](PurchasesReturnsServiceCountReq.md#tobinary)
- [toJSON](PurchasesReturnsServiceCountReq.md#tojson)
- [toJson](PurchasesReturnsServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceCountReq.md#tojsonstring)
- [equals](PurchasesReturnsServiceCountReq.md#equals-1)
- [fromBinary](PurchasesReturnsServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceCountReq**(`data?`): [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\> |

#### Returns

[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceCountReq\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:1896

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_returns.scailo_pb.ts:1810

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_returns.scailo_pb.ts:1803

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_returns.scailo_pb.ts:1796

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_returns.scailo_pb.ts:1817

___

### billingStatus

• **billingStatus**: [`PURCHASE_RETURN_BILLING_STATUS`](../enums/PURCHASE_RETURN_BILLING_STATUS.md) = `PURCHASE_RETURN_BILLING_STATUS.PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the purchase return bill

**`Generated`**

from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

src/purchases_returns.scailo_pb.ts:1873

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_returns.scailo_pb.ts:1831

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_returns.scailo_pb.ts:1824

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_returns.scailo_pb.ts:1761

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_returns.scailo_pb.ts:1754

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_returns.scailo_pb.ts:1782

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 60;

#### Defined in

src/purchases_returns.scailo_pb.ts:1894

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_returns.scailo_pb.ts:1845

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:1747

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/purchases_returns.scailo_pb.ts:1866

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_returns.scailo_pb.ts:1775

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_returns.scailo_pb.ts:1768

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 51;

#### Defined in

src/purchases_returns.scailo_pb.ts:1887

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/purchases_returns.scailo_pb.ts:1852

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/purchases_returns.scailo_pb.ts:1859

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_returns.scailo_pb.ts:1838

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:1789

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

src/purchases_returns.scailo_pb.ts:1880

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:1903

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:1901

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceCountReq"``

#### Defined in

src/purchases_returns.scailo_pb.ts:1902

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:1940

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1928

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1932

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCountReq`](PurchasesReturnsServiceCountReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:1936
