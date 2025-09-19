[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHubsServiceUpdateRequest

# Class: QCHubsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.QCHubsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\>

  ↳ **`QCHubsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCHubsServiceUpdateRequest.md#constructor)

### Properties

- [code](QCHubsServiceUpdateRequest.md#code)
- [description](QCHubsServiceUpdateRequest.md#description)
- [id](QCHubsServiceUpdateRequest.md#id)
- [inchargeUsername](QCHubsServiceUpdateRequest.md#inchargeusername)
- [name](QCHubsServiceUpdateRequest.md#name)
- [notifyUsers](QCHubsServiceUpdateRequest.md#notifyusers)
- [phone](QCHubsServiceUpdateRequest.md#phone)
- [userComment](QCHubsServiceUpdateRequest.md#usercomment)
- [fields](QCHubsServiceUpdateRequest.md#fields)
- [runtime](QCHubsServiceUpdateRequest.md#runtime)
- [typeName](QCHubsServiceUpdateRequest.md#typename)

### Methods

- [clone](QCHubsServiceUpdateRequest.md#clone)
- [equals](QCHubsServiceUpdateRequest.md#equals)
- [fromBinary](QCHubsServiceUpdateRequest.md#frombinary)
- [fromJson](QCHubsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QCHubsServiceUpdateRequest.md#fromjsonstring)
- [getType](QCHubsServiceUpdateRequest.md#gettype)
- [toBinary](QCHubsServiceUpdateRequest.md#tobinary)
- [toJSON](QCHubsServiceUpdateRequest.md#tojson)
- [toJson](QCHubsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QCHubsServiceUpdateRequest.md#tojsonstring)
- [equals](QCHubsServiceUpdateRequest.md#equals-1)
- [fromBinary](QCHubsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QCHubsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QCHubsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHubsServiceUpdateRequest**(`data?`): [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\> |

#### Returns

[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QCHubsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/qc_hubs.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L246)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the qc hub is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_hubs.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L223)

___

### description

• **description**: `string` = `""`

The description of the qc hub

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_hubs.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L230)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/qc_hubs.scailo_pb.ts:202](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L202)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

The username of the incharge

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/qc_hubs.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L237)

___

### name

• **name**: `string` = `""`

The name of the qc hub

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_hubs.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L216)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that qc hubs if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/qc_hubs.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L209)

___

### phone

• **phone**: `string` = `""`

The contact number of the qc hub

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/qc_hubs.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L244)

___

### userComment

• **userComment**: `string` = `""`

QCHubs any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/qc_hubs.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_hubs.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L253)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_hubs.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L251)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHubsServiceUpdateRequest"``

#### Defined in

[src/qc_hubs.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L252)

## Methods

### clone

▸ **clone**(): [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_hubs.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L276)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L264)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L268)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceUpdateRequest`](QCHubsServiceUpdateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L272)
