[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceCountReq

# Class: StockAuditsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StockAuditsServiceCountReq

## Hierarchy

- `Message`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\>

  ↳ **`StockAuditsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StockAuditsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StockAuditsServiceCountReq.md#approvedonend)
- [approvedOnStart](StockAuditsServiceCountReq.md#approvedonstart)
- [approverRoleId](StockAuditsServiceCountReq.md#approverroleid)
- [completedOnEnd](StockAuditsServiceCountReq.md#completedonend)
- [completedOnStart](StockAuditsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](StockAuditsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StockAuditsServiceCountReq.md#creationtimestampstart)
- [entityUuid](StockAuditsServiceCountReq.md#entityuuid)
- [familyId](StockAuditsServiceCountReq.md#familyid)
- [finalRefNumber](StockAuditsServiceCountReq.md#finalrefnumber)
- [formData](StockAuditsServiceCountReq.md#formdata)
- [isActive](StockAuditsServiceCountReq.md#isactive)
- [locationId](StockAuditsServiceCountReq.md#locationid)
- [modificationTimestampEnd](StockAuditsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StockAuditsServiceCountReq.md#modificationtimestampstart)
- [referenceId](StockAuditsServiceCountReq.md#referenceid)
- [status](StockAuditsServiceCountReq.md#status)
- [fields](StockAuditsServiceCountReq.md#fields)
- [runtime](StockAuditsServiceCountReq.md#runtime)
- [typeName](StockAuditsServiceCountReq.md#typename)

### Methods

- [clone](StockAuditsServiceCountReq.md#clone)
- [equals](StockAuditsServiceCountReq.md#equals)
- [fromBinary](StockAuditsServiceCountReq.md#frombinary)
- [fromJson](StockAuditsServiceCountReq.md#fromjson)
- [fromJsonString](StockAuditsServiceCountReq.md#fromjsonstring)
- [getType](StockAuditsServiceCountReq.md#gettype)
- [toBinary](StockAuditsServiceCountReq.md#tobinary)
- [toJSON](StockAuditsServiceCountReq.md#tojson)
- [toJson](StockAuditsServiceCountReq.md#tojson-1)
- [toJsonString](StockAuditsServiceCountReq.md#tojsonstring)
- [equals](StockAuditsServiceCountReq.md#equals-1)
- [fromBinary](StockAuditsServiceCountReq.md#frombinary-1)
- [fromJson](StockAuditsServiceCountReq.md#fromjson-1)
- [fromJsonString](StockAuditsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceCountReq**(`data?`): [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\> |

#### Returns

[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Overrides

Message\&lt;StockAuditsServiceCountReq\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:1463

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:1405

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:1398

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:1391

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/stock_audits.scailo_pb.ts:1412

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/stock_audits.scailo_pb.ts:1426

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:1419

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/stock_audits.scailo_pb.ts:1356

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/stock_audits.scailo_pb.ts:1349

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/stock_audits.scailo_pb.ts:1377

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/stock_audits.scailo_pb.ts:1454

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/stock_audits.scailo_pb.ts:1440

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/stock_audits.scailo_pb.ts:1461

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:1342

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/stock_audits.scailo_pb.ts:1447

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/stock_audits.scailo_pb.ts:1370

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/stock_audits.scailo_pb.ts:1363

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock audit

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/stock_audits.scailo_pb.ts:1433

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock audit

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:1384

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:1470

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:1468

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceCountReq"``

#### Defined in

src/stock_audits.scailo_pb.ts:1469

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md) \| `PlainMessage`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md) \| `PlainMessage`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md) \| `PlainMessage`\<[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:1503

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1491

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1495

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceCountReq`](StockAuditsServiceCountReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1499
