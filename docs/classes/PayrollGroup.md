[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollGroup

# Class: PayrollGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PayrollGroup

## Hierarchy

- `Message`\<[`PayrollGroup`](PayrollGroup.md)\>

  ↳ **`PayrollGroup`**

## Table of contents

### Constructors

- [constructor](PayrollGroup.md#constructor)

### Properties

- [approvalMetadata](PayrollGroup.md#approvalmetadata)
- [code](PayrollGroup.md#code)
- [completedOn](PayrollGroup.md#completedon)
- [description](PayrollGroup.md#description)
- [entityUuid](PayrollGroup.md#entityuuid)
- [list](PayrollGroup.md#list)
- [logs](PayrollGroup.md#logs)
- [metadata](PayrollGroup.md#metadata)
- [name](PayrollGroup.md#name)
- [status](PayrollGroup.md#status)
- [fields](PayrollGroup.md#fields)
- [runtime](PayrollGroup.md#runtime)
- [typeName](PayrollGroup.md#typename)

### Methods

- [clone](PayrollGroup.md#clone)
- [equals](PayrollGroup.md#equals)
- [fromBinary](PayrollGroup.md#frombinary)
- [fromJson](PayrollGroup.md#fromjson)
- [fromJsonString](PayrollGroup.md#fromjsonstring)
- [getType](PayrollGroup.md#gettype)
- [toBinary](PayrollGroup.md#tobinary)
- [toJSON](PayrollGroup.md#tojson)
- [toJson](PayrollGroup.md#tojson-1)
- [toJsonString](PayrollGroup.md#tojsonstring)
- [equals](PayrollGroup.md#equals-1)
- [fromBinary](PayrollGroup.md#frombinary-1)
- [fromJson](PayrollGroup.md#fromjson-1)
- [fromJsonString](PayrollGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollGroup**(`data?`): [`PayrollGroup`](PayrollGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollGroup`](PayrollGroup.md)\> |

#### Returns

[`PayrollGroup`](PayrollGroup.md)

#### Overrides

Message\&lt;PayrollGroup\&gt;.constructor

#### Defined in

src/payroll_groups.scailo_pb.ts:353

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/payroll_groups.scailo_pb.ts:302

___

### code

• **code**: `string` = `""`

The payroll group code

**`Generated`**

from field: string code = 11;

#### Defined in

src/payroll_groups.scailo_pb.ts:337

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this payroll group was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/payroll_groups.scailo_pb.ts:323

___

### description

• **description**: `string` = `""`

The description of the payroll group

**`Generated`**

from field: string description = 13;

#### Defined in

src/payroll_groups.scailo_pb.ts:344

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/payroll_groups.scailo_pb.ts:288

___

### list

• **list**: [`PayrollGroupItem`](PayrollGroupItem.md)[] = `[]`

The list of associated payroll group params

**`Generated`**

from field: repeated Scailo.PayrollGroupItem list = 20;

#### Defined in

src/payroll_groups.scailo_pb.ts:351

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this payroll group

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/payroll_groups.scailo_pb.ts:316

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this payroll group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/payroll_groups.scailo_pb.ts:295

___

### name

• **name**: `string` = `""`

The name of the payroll group

**`Generated`**

from field: string name = 10;

#### Defined in

src/payroll_groups.scailo_pb.ts:330

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this payroll group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/payroll_groups.scailo_pb.ts:309

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/payroll_groups.scailo_pb.ts:360

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/payroll_groups.scailo_pb.ts:358

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollGroup"``

#### Defined in

src/payroll_groups.scailo_pb.ts:359

## Methods

### clone

▸ **clone**(): [`PayrollGroup`](PayrollGroup.md)

Create a deep copy.

#### Returns

[`PayrollGroup`](PayrollGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollGroup`](PayrollGroup.md) \| `PlainMessage`\<[`PayrollGroup`](PayrollGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollGroup`](PayrollGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollGroup`](PayrollGroup.md)\>

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
| `a` | `undefined` \| [`PayrollGroup`](PayrollGroup.md) \| `PlainMessage`\<[`PayrollGroup`](PayrollGroup.md)\> |
| `b` | `undefined` \| [`PayrollGroup`](PayrollGroup.md) \| `PlainMessage`\<[`PayrollGroup`](PayrollGroup.md)\> |

#### Returns

`boolean`

#### Defined in

src/payroll_groups.scailo_pb.ts:385

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollGroup`](PayrollGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollGroup`](PayrollGroup.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:373

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollGroup`](PayrollGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroup`](PayrollGroup.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:377

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollGroup`](PayrollGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollGroup`](PayrollGroup.md)

#### Defined in

src/payroll_groups.scailo_pb.ts:381
