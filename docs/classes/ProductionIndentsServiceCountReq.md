[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceCountReq

# Class: ProductionIndentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ProductionIndentsServiceCountReq

## Hierarchy

- `Message`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\>

  ↳ **`ProductionIndentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ProductionIndentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionIndentsServiceCountReq.md#approvedonend)
- [approvedOnStart](ProductionIndentsServiceCountReq.md#approvedonstart)
- [approverRoleId](ProductionIndentsServiceCountReq.md#approverroleid)
- [completedOnEnd](ProductionIndentsServiceCountReq.md#completedonend)
- [completedOnStart](ProductionIndentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ProductionIndentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProductionIndentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ProductionIndentsServiceCountReq.md#entityuuid)
- [familyId](ProductionIndentsServiceCountReq.md#familyid)
- [finalRefNumber](ProductionIndentsServiceCountReq.md#finalrefnumber)
- [formData](ProductionIndentsServiceCountReq.md#formdata)
- [indentRefFor](ProductionIndentsServiceCountReq.md#indentreffor)
- [indentRefId](ProductionIndentsServiceCountReq.md#indentrefid)
- [isActive](ProductionIndentsServiceCountReq.md#isactive)
- [locationId](ProductionIndentsServiceCountReq.md#locationid)
- [modificationTimestampEnd](ProductionIndentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductionIndentsServiceCountReq.md#modificationtimestampstart)
- [productionRefFor](ProductionIndentsServiceCountReq.md#productionreffor)
- [productionRefId](ProductionIndentsServiceCountReq.md#productionrefid)
- [referenceId](ProductionIndentsServiceCountReq.md#referenceid)
- [status](ProductionIndentsServiceCountReq.md#status)
- [supervisor](ProductionIndentsServiceCountReq.md#supervisor)
- [fields](ProductionIndentsServiceCountReq.md#fields)
- [runtime](ProductionIndentsServiceCountReq.md#runtime)
- [typeName](ProductionIndentsServiceCountReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceCountReq.md#clone)
- [equals](ProductionIndentsServiceCountReq.md#equals)
- [fromBinary](ProductionIndentsServiceCountReq.md#frombinary)
- [fromJson](ProductionIndentsServiceCountReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceCountReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceCountReq.md#gettype)
- [toBinary](ProductionIndentsServiceCountReq.md#tobinary)
- [toJSON](ProductionIndentsServiceCountReq.md#tojson)
- [toJson](ProductionIndentsServiceCountReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceCountReq.md#tojsonstring)
- [equals](ProductionIndentsServiceCountReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceCountReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceCountReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceCountReq**(`data?`): [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\> |

#### Returns

[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Overrides

Message\&lt;ProductionIndentsServiceCountReq\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:1702

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/production_indents.scailo_pb.ts:1609

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/production_indents.scailo_pb.ts:1602

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/production_indents.scailo_pb.ts:1595

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/production_indents.scailo_pb.ts:1616

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/production_indents.scailo_pb.ts:1630

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/production_indents.scailo_pb.ts:1623

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/production_indents.scailo_pb.ts:1560

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/production_indents.scailo_pb.ts:1553

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/production_indents.scailo_pb.ts:1581

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/production_indents.scailo_pb.ts:1693

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/production_indents.scailo_pb.ts:1644

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/production_indents.scailo_pb.ts:1700

___

### indentRefFor

• **indentRefFor**: [`PRODUCTION_INDENT_INDENT_REF_FOR`](../enums/PRODUCTION_INDENT_INDENT_REF_FOR.md) = `PRODUCTION_INDENT_INDENT_REF_FOR.PRODUCTION_INDENT_INDENT_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_INDENT_REF_FOR indent_ref_for = 28;

#### Defined in

src/production_indents.scailo_pb.ts:1679

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: uint64 indent_ref_id = 29;

#### Defined in

src/production_indents.scailo_pb.ts:1686

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/production_indents.scailo_pb.ts:1546

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/production_indents.scailo_pb.ts:1651

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/production_indents.scailo_pb.ts:1574

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/production_indents.scailo_pb.ts:1567

___

### productionRefFor

• **productionRefFor**: [`PRODUCTION_INDENT_PRODUCTION_REF_FOR`](../enums/PRODUCTION_INDENT_PRODUCTION_REF_FOR.md) = `PRODUCTION_INDENT_PRODUCTION_REF_FOR.PRODUCTION_INDENT_PRODUCTION_REF_FOR_ANY_UNSPECIFIED`

Stores if the indent is associated to a production plan

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_PRODUCTION_REF_FOR production_ref_for = 26;

#### Defined in

src/production_indents.scailo_pb.ts:1665

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: uint64 production_ref_id = 27;

#### Defined in

src/production_indents.scailo_pb.ts:1672

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/production_indents.scailo_pb.ts:1637

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this production indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/production_indents.scailo_pb.ts:1588

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

src/production_indents.scailo_pb.ts:1658

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:1709

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:1707

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceCountReq"``

#### Defined in

src/production_indents.scailo_pb.ts:1708

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md) \| `PlainMessage`\<[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:1747

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1735

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1739

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCountReq`](ProductionIndentsServiceCountReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1743
