[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceCountReq

# Class: EquationsFamiliesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.EquationsFamiliesServiceCountReq

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\>

  ↳ **`EquationsFamiliesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](EquationsFamiliesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsFamiliesServiceCountReq.md#approvedonend)
- [approvedOnStart](EquationsFamiliesServiceCountReq.md#approvedonstart)
- [approverRoleId](EquationsFamiliesServiceCountReq.md#approverroleid)
- [completedOnEnd](EquationsFamiliesServiceCountReq.md#completedonend)
- [completedOnStart](EquationsFamiliesServiceCountReq.md#completedonstart)
- [constituentFamilyId](EquationsFamiliesServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](EquationsFamiliesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](EquationsFamiliesServiceCountReq.md#creationtimestampstart)
- [entityUuid](EquationsFamiliesServiceCountReq.md#entityuuid)
- [familyId](EquationsFamiliesServiceCountReq.md#familyid)
- [isActive](EquationsFamiliesServiceCountReq.md#isactive)
- [modificationTimestampEnd](EquationsFamiliesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsFamiliesServiceCountReq.md#modificationtimestampstart)
- [name](EquationsFamiliesServiceCountReq.md#name)
- [status](EquationsFamiliesServiceCountReq.md#status)
- [fields](EquationsFamiliesServiceCountReq.md#fields)
- [runtime](EquationsFamiliesServiceCountReq.md#runtime)
- [typeName](EquationsFamiliesServiceCountReq.md#typename)

### Methods

- [clone](EquationsFamiliesServiceCountReq.md#clone)
- [equals](EquationsFamiliesServiceCountReq.md#equals)
- [fromBinary](EquationsFamiliesServiceCountReq.md#frombinary)
- [fromJson](EquationsFamiliesServiceCountReq.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceCountReq.md#fromjsonstring)
- [getType](EquationsFamiliesServiceCountReq.md#gettype)
- [toBinary](EquationsFamiliesServiceCountReq.md#tobinary)
- [toJSON](EquationsFamiliesServiceCountReq.md#tojson)
- [toJson](EquationsFamiliesServiceCountReq.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceCountReq.md#tojsonstring)
- [equals](EquationsFamiliesServiceCountReq.md#equals-1)
- [fromBinary](EquationsFamiliesServiceCountReq.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceCountReq.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceCountReq**(`data?`): [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\> |

#### Returns

[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceCountReq\&gt;.constructor

#### Defined in

src/equations_families.scailo_pb.ts:1582

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/equations_families.scailo_pb.ts:1538

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/equations_families.scailo_pb.ts:1531

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/equations_families.scailo_pb.ts:1524

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/equations_families.scailo_pb.ts:1545

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/equations_families.scailo_pb.ts:1559

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/equations_families.scailo_pb.ts:1552

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

src/equations_families.scailo_pb.ts:1580

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/equations_families.scailo_pb.ts:1489

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/equations_families.scailo_pb.ts:1482

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/equations_families.scailo_pb.ts:1510

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/equations_families.scailo_pb.ts:1573

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equations_families.scailo_pb.ts:1475

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/equations_families.scailo_pb.ts:1503

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/equations_families.scailo_pb.ts:1496

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 20;

#### Defined in

src/equations_families.scailo_pb.ts:1566

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation family

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/equations_families.scailo_pb.ts:1517

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_families.scailo_pb.ts:1589

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_families.scailo_pb.ts:1587

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceCountReq"``

#### Defined in

src/equations_families.scailo_pb.ts:1588

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_families.scailo_pb.ts:1620

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1608

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1612

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCountReq`](EquationsFamiliesServiceCountReq.md)

#### Defined in

src/equations_families.scailo_pb.ts:1616
