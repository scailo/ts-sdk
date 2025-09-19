[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamMessageReceipt

# Class: GeneralStreamMessageReceipt

Describes the parameters that constitute a message receipt

**`Generated`**

from message Scailo.GeneralStreamMessageReceipt

## Hierarchy

- `Message`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\>

  ↳ **`GeneralStreamMessageReceipt`**

## Table of contents

### Constructors

- [constructor](GeneralStreamMessageReceipt.md#constructor)

### Properties

- [entityUuid](GeneralStreamMessageReceipt.md#entityuuid)
- [generalStreamMessageUuid](GeneralStreamMessageReceipt.md#generalstreammessageuuid)
- [isRead](GeneralStreamMessageReceipt.md#isread)
- [metadata](GeneralStreamMessageReceipt.md#metadata)
- [readAt](GeneralStreamMessageReceipt.md#readat)
- [userId](GeneralStreamMessageReceipt.md#userid)
- [fields](GeneralStreamMessageReceipt.md#fields)
- [runtime](GeneralStreamMessageReceipt.md#runtime)
- [typeName](GeneralStreamMessageReceipt.md#typename)

### Methods

- [clone](GeneralStreamMessageReceipt.md#clone)
- [equals](GeneralStreamMessageReceipt.md#equals)
- [fromBinary](GeneralStreamMessageReceipt.md#frombinary)
- [fromJson](GeneralStreamMessageReceipt.md#fromjson)
- [fromJsonString](GeneralStreamMessageReceipt.md#fromjsonstring)
- [getType](GeneralStreamMessageReceipt.md#gettype)
- [toBinary](GeneralStreamMessageReceipt.md#tobinary)
- [toJSON](GeneralStreamMessageReceipt.md#tojson)
- [toJson](GeneralStreamMessageReceipt.md#tojson-1)
- [toJsonString](GeneralStreamMessageReceipt.md#tojsonstring)
- [equals](GeneralStreamMessageReceipt.md#equals-1)
- [fromBinary](GeneralStreamMessageReceipt.md#frombinary-1)
- [fromJson](GeneralStreamMessageReceipt.md#fromjson-1)
- [fromJsonString](GeneralStreamMessageReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamMessageReceipt**(`data?`): [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\> |

#### Returns

[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Overrides

Message\&lt;GeneralStreamMessageReceipt\&gt;.constructor

#### Defined in

[src/general_streams.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1581)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/general_streams.scailo_pb.ts:1544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1544)

___

### generalStreamMessageUuid

• **generalStreamMessageUuid**: `string` = `""`

Stores the general stream message UUID

**`Generated`**

from field: string general_stream_message_uuid = 10;

#### Defined in

[src/general_streams.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1558)

___

### isRead

• **isRead**: `boolean` = `false`

Stores if the message has been read by the user

**`Generated`**

from field: bool is_read = 12;

#### Defined in

[src/general_streams.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1572)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this general stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/general_streams.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1551)

___

### readAt

• **readAt**: `bigint` = `protoInt64.zero`

Stores the timestamp of when the message was read

**`Generated`**

from field: uint64 read_at = 13;

#### Defined in

[src/general_streams.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1579)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who read this

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/general_streams.scailo_pb.ts:1565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1565)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_streams.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1588)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_streams.scailo_pb.ts:1586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1586)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamMessageReceipt"``

#### Defined in

[src/general_streams.scailo_pb.ts:1587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1587)

## Methods

### clone

▸ **clone**(): [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

Create a deep copy.

#### Returns

[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md) \| `PlainMessage`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\>

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
| `a` | `undefined` \| [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md) \| `PlainMessage`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\> |
| `b` | `undefined` \| [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md) \| `PlainMessage`\<[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_streams.scailo_pb.ts:1609](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1609)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1597)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1601)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)

#### Defined in

[src/general_streams.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L1605)
