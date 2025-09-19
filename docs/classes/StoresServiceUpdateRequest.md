[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceUpdateRequest

# Class: StoresServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.StoresServiceUpdateRequest

## Hierarchy

- `Message`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

  ↳ **`StoresServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StoresServiceUpdateRequest.md#constructor)

### Properties

- [code](StoresServiceUpdateRequest.md#code)
- [description](StoresServiceUpdateRequest.md#description)
- [id](StoresServiceUpdateRequest.md#id)
- [inchargeUsername](StoresServiceUpdateRequest.md#inchargeusername)
- [name](StoresServiceUpdateRequest.md#name)
- [notifyUsers](StoresServiceUpdateRequest.md#notifyusers)
- [phone](StoresServiceUpdateRequest.md#phone)
- [userComment](StoresServiceUpdateRequest.md#usercomment)
- [fields](StoresServiceUpdateRequest.md#fields)
- [runtime](StoresServiceUpdateRequest.md#runtime)
- [typeName](StoresServiceUpdateRequest.md#typename)

### Methods

- [clone](StoresServiceUpdateRequest.md#clone)
- [equals](StoresServiceUpdateRequest.md#equals)
- [fromBinary](StoresServiceUpdateRequest.md#frombinary)
- [fromJson](StoresServiceUpdateRequest.md#fromjson)
- [fromJsonString](StoresServiceUpdateRequest.md#fromjsonstring)
- [getType](StoresServiceUpdateRequest.md#gettype)
- [toBinary](StoresServiceUpdateRequest.md#tobinary)
- [toJSON](StoresServiceUpdateRequest.md#tojson)
- [toJson](StoresServiceUpdateRequest.md#tojson-1)
- [toJsonString](StoresServiceUpdateRequest.md#tojsonstring)
- [equals](StoresServiceUpdateRequest.md#equals-1)
- [fromBinary](StoresServiceUpdateRequest.md#frombinary-1)
- [fromJson](StoresServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StoresServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceUpdateRequest**(`data?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Overrides

Message\&lt;StoresServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L246)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the store is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/stores.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L223)

___

### description

• **description**: `string` = `""`

The description of the store

**`Generated`**

from field: string description = 12;

#### Defined in

[src/stores.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L230)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/stores.scailo_pb.ts:202](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L202)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

The username of the incharge

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/stores.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L237)

___

### name

• **name**: `string` = `""`

The name of the store

**`Generated`**

from field: string name = 10;

#### Defined in

[src/stores.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L216)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/stores.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L209)

___

### phone

• **phone**: `string` = `""`

The contact number of the store

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/stores.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L244)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/stores.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L253)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L251)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceUpdateRequest"``

#### Defined in

[src/stores.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L252)

## Methods

### clone

▸ **clone**(): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md) \| `PlainMessage`\<[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L276)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L264)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L268)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceUpdateRequest`](StoresServiceUpdateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stores.scailo_pb.ts#L272)
