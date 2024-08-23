[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParam

# Class: QCParam

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QCParam

## Hierarchy

- `Message`\<[`QCParam`](QCParam.md)\>

  ↳ **`QCParam`**

## Table of contents

### Constructors

- [constructor](QCParam.md#constructor)

### Properties

- [approvalMetadata](QCParam.md#approvalmetadata)
- [code](QCParam.md#code)
- [completedOn](QCParam.md#completedon)
- [description](QCParam.md#description)
- [entityUuid](QCParam.md#entityuuid)
- [logs](QCParam.md#logs)
- [metadata](QCParam.md#metadata)
- [name](QCParam.md#name)
- [status](QCParam.md#status)
- [fields](QCParam.md#fields)
- [runtime](QCParam.md#runtime)
- [typeName](QCParam.md#typename)

### Methods

- [clone](QCParam.md#clone)
- [equals](QCParam.md#equals)
- [fromBinary](QCParam.md#frombinary)
- [fromJson](QCParam.md#fromjson)
- [fromJsonString](QCParam.md#fromjsonstring)
- [getType](QCParam.md#gettype)
- [toBinary](QCParam.md#tobinary)
- [toJSON](QCParam.md#tojson)
- [toJson](QCParam.md#tojson-1)
- [toJsonString](QCParam.md#tojsonstring)
- [equals](QCParam.md#equals-1)
- [fromBinary](QCParam.md#frombinary-1)
- [fromJson](QCParam.md#fromjson-1)
- [fromJsonString](QCParam.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParam**(`data?`): [`QCParam`](QCParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParam`](QCParam.md)\> |

#### Returns

[`QCParam`](QCParam.md)

#### Overrides

Message\&lt;QCParam\&gt;.constructor

#### Defined in

src/qc_params.scailo_pb.ts:319

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/qc_params.scailo_pb.ts:275

___

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 11;

#### Defined in

src/qc_params.scailo_pb.ts:310

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this qc param was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/qc_params.scailo_pb.ts:296

___

### description

• **description**: `string` = `""`

The description of the qc param

**`Generated`**

from field: string description = 12;

#### Defined in

src/qc_params.scailo_pb.ts:317

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/qc_params.scailo_pb.ts:261

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this qc param

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/qc_params.scailo_pb.ts:289

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this qc param

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/qc_params.scailo_pb.ts:268

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 10;

#### Defined in

src/qc_params.scailo_pb.ts:303

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/qc_params.scailo_pb.ts:282

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_params.scailo_pb.ts:326

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_params.scailo_pb.ts:324

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParam"``

#### Defined in

src/qc_params.scailo_pb.ts:325

## Methods

### clone

▸ **clone**(): [`QCParam`](QCParam.md)

Create a deep copy.

#### Returns

[`QCParam`](QCParam.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParam`](QCParam.md) \| `PlainMessage`\<[`QCParam`](QCParam.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParam`](QCParam.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParam`](QCParam.md)\>

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
| `a` | `undefined` \| [`QCParam`](QCParam.md) \| `PlainMessage`\<[`QCParam`](QCParam.md)\> |
| `b` | `undefined` \| [`QCParam`](QCParam.md) \| `PlainMessage`\<[`QCParam`](QCParam.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_params.scailo_pb.ts:350

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParam`](QCParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParam`](QCParam.md)

#### Defined in

src/qc_params.scailo_pb.ts:338

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParam`](QCParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParam`](QCParam.md)

#### Defined in

src/qc_params.scailo_pb.ts:342

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParam`](QCParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParam`](QCParam.md)

#### Defined in

src/qc_params.scailo_pb.ts:346
