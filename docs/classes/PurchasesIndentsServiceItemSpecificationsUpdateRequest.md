[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceItemSpecificationsUpdateRequest

# Class: PurchasesIndentsServiceItemSpecificationsUpdateRequest

Describes the parameters required to update the specifications of an item in a purchase indent

**`Generated`**

from message Scailo.PurchasesIndentsServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`PurchasesIndentsServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceItemSpecificationsUpdateRequest**(`data?`): [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:941](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L941)

## Properties

### specifications

• **specifications**: `string` = `""`

The specifications that should be updated

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/purchases_indents.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L939)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_indents.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L925)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/purchases_indents.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L932)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L948)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L946)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L947)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L966)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L954)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L958)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemSpecificationsUpdateRequest`](PurchasesIndentsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_indents.scailo_pb.ts#L962)
