[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AmendmentLog

# Class: AmendmentLog

Describes the data payload within an amendment log

**`Generated`**

from message Scailo.AmendmentLog

## Hierarchy

- `Message`\<[`AmendmentLog`](AmendmentLog.md)\>

  ↳ **`AmendmentLog`**

## Table of contents

### Constructors

- [constructor](AmendmentLog.md#constructor)

### Properties

- [comment](AmendmentLog.md#comment)
- [entityUuid](AmendmentLog.md#entityuuid)
- [metadata](AmendmentLog.md#metadata)
- [refFor](AmendmentLog.md#reffor)
- [refId](AmendmentLog.md#refid)
- [fields](AmendmentLog.md#fields)
- [runtime](AmendmentLog.md#runtime)
- [typeName](AmendmentLog.md#typename)

### Methods

- [clone](AmendmentLog.md#clone)
- [equals](AmendmentLog.md#equals)
- [fromBinary](AmendmentLog.md#frombinary)
- [fromJson](AmendmentLog.md#fromjson)
- [fromJsonString](AmendmentLog.md#fromjsonstring)
- [getType](AmendmentLog.md#gettype)
- [toBinary](AmendmentLog.md#tobinary)
- [toJSON](AmendmentLog.md#tojson)
- [toJson](AmendmentLog.md#tojson-1)
- [toJsonString](AmendmentLog.md#tojsonstring)
- [equals](AmendmentLog.md#equals-1)
- [fromBinary](AmendmentLog.md#frombinary-1)
- [fromJson](AmendmentLog.md#fromjson-1)
- [fromJsonString](AmendmentLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new AmendmentLog**(`data?`): [`AmendmentLog`](AmendmentLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AmendmentLog`](AmendmentLog.md)\> |

#### Returns

[`AmendmentLog`](AmendmentLog.md)

#### Overrides

Message\&lt;AmendmentLog\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:3814

## Properties

### comment

• **comment**: `string` = `""`

Stores the comment

**`Generated`**

from field: string comment = 20;

#### Defined in

src/base.scailo_pb.ts:3812

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/base.scailo_pb.ts:3784

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metada of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/base.scailo_pb.ts:3791

___

### refFor

• **refFor**: [`AMENDMENT_LOG_REF_FOR`](../enums/AMENDMENT_LOG_REF_FOR.md) = `AMENDMENT_LOG_REF_FOR.AMENDMENT_LOG_REF_FOR_ANY_UNSPECIFIED`

Stores the reference

**`Generated`**

from field: Scailo.AMENDMENT_LOG_REF_FOR ref_for = 10;

#### Defined in

src/base.scailo_pb.ts:3798

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 11;

#### Defined in

src/base.scailo_pb.ts:3805

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:3821

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:3819

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AmendmentLog"``

#### Defined in

src/base.scailo_pb.ts:3820

## Methods

### clone

▸ **clone**(): [`AmendmentLog`](AmendmentLog.md)

Create a deep copy.

#### Returns

[`AmendmentLog`](AmendmentLog.md)

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
| `other` | `undefined` \| ``null`` \| [`AmendmentLog`](AmendmentLog.md) \| `PlainMessage`\<[`AmendmentLog`](AmendmentLog.md)\> |

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

▸ **getType**(): `MessageType`\<[`AmendmentLog`](AmendmentLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AmendmentLog`](AmendmentLog.md)\>

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
| `a` | `undefined` \| [`AmendmentLog`](AmendmentLog.md) \| `PlainMessage`\<[`AmendmentLog`](AmendmentLog.md)\> |
| `b` | `undefined` \| [`AmendmentLog`](AmendmentLog.md) \| `PlainMessage`\<[`AmendmentLog`](AmendmentLog.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:3841

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AmendmentLog`](AmendmentLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AmendmentLog`](AmendmentLog.md)

#### Defined in

src/base.scailo_pb.ts:3829

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AmendmentLog`](AmendmentLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AmendmentLog`](AmendmentLog.md)

#### Defined in

src/base.scailo_pb.ts:3833

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AmendmentLog`](AmendmentLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AmendmentLog`](AmendmentLog.md)

#### Defined in

src/base.scailo_pb.ts:3837
