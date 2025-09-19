[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SearchReturnableInventoryForIdentifierUUID

# Class: SearchReturnableInventoryForIdentifierUUID

Describes the message that consists of parameters that are required to search for returnable inventory for a record with the given identifier

**`Generated`**

from message Scailo.SearchReturnableInventoryForIdentifierUUID

## Hierarchy

- `Message`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\>

  ↳ **`SearchReturnableInventoryForIdentifierUUID`**

## Table of contents

### Constructors

- [constructor](SearchReturnableInventoryForIdentifierUUID.md#constructor)

### Properties

- [filter](SearchReturnableInventoryForIdentifierUUID.md#filter)
- [uuid](SearchReturnableInventoryForIdentifierUUID.md#uuid)
- [fields](SearchReturnableInventoryForIdentifierUUID.md#fields)
- [runtime](SearchReturnableInventoryForIdentifierUUID.md#runtime)
- [typeName](SearchReturnableInventoryForIdentifierUUID.md#typename)

### Methods

- [clone](SearchReturnableInventoryForIdentifierUUID.md#clone)
- [equals](SearchReturnableInventoryForIdentifierUUID.md#equals)
- [fromBinary](SearchReturnableInventoryForIdentifierUUID.md#frombinary)
- [fromJson](SearchReturnableInventoryForIdentifierUUID.md#fromjson)
- [fromJsonString](SearchReturnableInventoryForIdentifierUUID.md#fromjsonstring)
- [getType](SearchReturnableInventoryForIdentifierUUID.md#gettype)
- [toBinary](SearchReturnableInventoryForIdentifierUUID.md#tobinary)
- [toJSON](SearchReturnableInventoryForIdentifierUUID.md#tojson)
- [toJson](SearchReturnableInventoryForIdentifierUUID.md#tojson-1)
- [toJsonString](SearchReturnableInventoryForIdentifierUUID.md#tojsonstring)
- [equals](SearchReturnableInventoryForIdentifierUUID.md#equals-1)
- [fromBinary](SearchReturnableInventoryForIdentifierUUID.md#frombinary-1)
- [fromJson](SearchReturnableInventoryForIdentifierUUID.md#fromjson-1)
- [fromJsonString](SearchReturnableInventoryForIdentifierUUID.md#fromjsonstring-1)

## Constructors

### constructor

• **new SearchReturnableInventoryForIdentifierUUID**(`data?`): [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\> |

#### Returns

[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Overrides

Message\&lt;SearchReturnableInventoryForIdentifierUUID\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1054)

## Properties

### filter

• `Optional` **filter**: [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

The search filter to apply

**`Generated`**

from field: Scailo.SearchReturnableInventoryReq filter = 10;

#### Defined in

[src/inventory.scailo_pb.ts:1052](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1052)

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/inventory.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1045)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1061)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1059)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SearchReturnableInventoryForIdentifierUUID"``

#### Defined in

[src/inventory.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1060)

## Methods

### clone

▸ **clone**(): [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

Create a deep copy.

#### Returns

[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

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
| `other` | `undefined` \| ``null`` \| [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\> |

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

▸ **getType**(): `MessageType`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\>

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
| `a` | `undefined` \| [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\> |
| `b` | `undefined` \| [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md) \| `PlainMessage`\<[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1078)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Defined in

[src/inventory.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1066)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Defined in

[src/inventory.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1070)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SearchReturnableInventoryForIdentifierUUID`](SearchReturnableInventoryForIdentifierUUID.md)

#### Defined in

[src/inventory.scailo_pb.ts:1074](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L1074)
