[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceCountReq

# Class: StockIssuancesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StockIssuancesServiceCountReq

## Hierarchy

- `Message`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

  ↳ **`StockIssuancesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StockIssuancesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StockIssuancesServiceCountReq.md#approvedonend)
- [approvedOnStart](StockIssuancesServiceCountReq.md#approvedonstart)
- [approverRoleId](StockIssuancesServiceCountReq.md#approverroleid)
- [completedOnEnd](StockIssuancesServiceCountReq.md#completedonend)
- [completedOnStart](StockIssuancesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](StockIssuancesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StockIssuancesServiceCountReq.md#creationtimestampstart)
- [entityUuid](StockIssuancesServiceCountReq.md#entityuuid)
- [familyId](StockIssuancesServiceCountReq.md#familyid)
- [finalRefNumber](StockIssuancesServiceCountReq.md#finalrefnumber)
- [isActive](StockIssuancesServiceCountReq.md#isactive)
- [locationId](StockIssuancesServiceCountReq.md#locationid)
- [modificationTimestampEnd](StockIssuancesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StockIssuancesServiceCountReq.md#modificationtimestampstart)
- [refFrom](StockIssuancesServiceCountReq.md#reffrom)
- [refId](StockIssuancesServiceCountReq.md#refid)
- [referenceId](StockIssuancesServiceCountReq.md#referenceid)
- [status](StockIssuancesServiceCountReq.md#status)
- [fields](StockIssuancesServiceCountReq.md#fields)
- [runtime](StockIssuancesServiceCountReq.md#runtime)
- [typeName](StockIssuancesServiceCountReq.md#typename)

### Methods

- [clone](StockIssuancesServiceCountReq.md#clone)
- [equals](StockIssuancesServiceCountReq.md#equals)
- [fromBinary](StockIssuancesServiceCountReq.md#frombinary)
- [fromJson](StockIssuancesServiceCountReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceCountReq.md#fromjsonstring)
- [getType](StockIssuancesServiceCountReq.md#gettype)
- [toBinary](StockIssuancesServiceCountReq.md#tobinary)
- [toJSON](StockIssuancesServiceCountReq.md#tojson)
- [toJson](StockIssuancesServiceCountReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceCountReq.md#tojsonstring)
- [equals](StockIssuancesServiceCountReq.md#equals-1)
- [fromBinary](StockIssuancesServiceCountReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceCountReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceCountReq**(`data?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Overrides

Message\&lt;StockIssuancesServiceCountReq\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:1574

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/stock_issuances.scailo_pb.ts:1509

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/stock_issuances.scailo_pb.ts:1502

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/stock_issuances.scailo_pb.ts:1495

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/stock_issuances.scailo_pb.ts:1516

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/stock_issuances.scailo_pb.ts:1530

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/stock_issuances.scailo_pb.ts:1523

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/stock_issuances.scailo_pb.ts:1460

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/stock_issuances.scailo_pb.ts:1453

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/stock_issuances.scailo_pb.ts:1481

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/stock_issuances.scailo_pb.ts:1572

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/stock_issuances.scailo_pb.ts:1544

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_issuances.scailo_pb.ts:1446

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/stock_issuances.scailo_pb.ts:1565

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/stock_issuances.scailo_pb.ts:1474

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/stock_issuances.scailo_pb.ts:1467

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/stock_issuances.scailo_pb.ts:1551

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/stock_issuances.scailo_pb.ts:1558

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/stock_issuances.scailo_pb.ts:1537

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/stock_issuances.scailo_pb.ts:1488

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:1581

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:1579

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceCountReq"``

#### Defined in

src/stock_issuances.scailo_pb.ts:1580

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:1615

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1603

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1607

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1611
