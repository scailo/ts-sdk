[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHubsServiceCreateRequest

# Class: QCHubsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QCHubsServiceCreateRequest

## Hierarchy

- `Message`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\>

  ↳ **`QCHubsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCHubsServiceCreateRequest.md#constructor)

### Properties

- [code](QCHubsServiceCreateRequest.md#code)
- [description](QCHubsServiceCreateRequest.md#description)
- [entityUuid](QCHubsServiceCreateRequest.md#entityuuid)
- [inchargeUsername](QCHubsServiceCreateRequest.md#inchargeusername)
- [locationId](QCHubsServiceCreateRequest.md#locationid)
- [name](QCHubsServiceCreateRequest.md#name)
- [phone](QCHubsServiceCreateRequest.md#phone)
- [userComment](QCHubsServiceCreateRequest.md#usercomment)
- [fields](QCHubsServiceCreateRequest.md#fields)
- [runtime](QCHubsServiceCreateRequest.md#runtime)
- [typeName](QCHubsServiceCreateRequest.md#typename)

### Methods

- [clone](QCHubsServiceCreateRequest.md#clone)
- [equals](QCHubsServiceCreateRequest.md#equals)
- [fromBinary](QCHubsServiceCreateRequest.md#frombinary)
- [fromJson](QCHubsServiceCreateRequest.md#fromjson)
- [fromJsonString](QCHubsServiceCreateRequest.md#fromjsonstring)
- [getType](QCHubsServiceCreateRequest.md#gettype)
- [toBinary](QCHubsServiceCreateRequest.md#tobinary)
- [toJSON](QCHubsServiceCreateRequest.md#tojson)
- [toJson](QCHubsServiceCreateRequest.md#tojson-1)
- [toJsonString](QCHubsServiceCreateRequest.md#tojsonstring)
- [equals](QCHubsServiceCreateRequest.md#equals-1)
- [fromBinary](QCHubsServiceCreateRequest.md#frombinary-1)
- [fromJson](QCHubsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QCHubsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHubsServiceCreateRequest**(`data?`): [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\> |

#### Returns

[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Overrides

Message\&lt;QCHubsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/qc_hubs.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L148)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the qc hub is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_hubs.scailo_pb.ts:125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L125)

___

### description

• **description**: `string` = `""`

The description of the qc hub

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_hubs.scailo_pb.ts:132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L132)

___

### entityUuid

• **entityUuid**: `string` = `""`

QCHubs a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_hubs.scailo_pb.ts:97](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L97)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

The username of the incharge

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/qc_hubs.scailo_pb.ts:139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L139)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 9;

#### Defined in

[src/qc_hubs.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L111)

___

### name

• **name**: `string` = `""`

The name of the qc hub

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_hubs.scailo_pb.ts:118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L118)

___

### phone

• **phone**: `string` = `""`

The contact number of the qc hub

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/qc_hubs.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L146)

___

### userComment

• **userComment**: `string` = `""`

QCHubs any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/qc_hubs.scailo_pb.ts:104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L104)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_hubs.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L155)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_hubs.scailo_pb.ts:153](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L153)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHubsServiceCreateRequest"``

#### Defined in

[src/qc_hubs.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L154)

## Methods

### clone

▸ **clone**(): [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md) \| `PlainMessage`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md) \| `PlainMessage`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md) \| `PlainMessage`\<[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_hubs.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L178)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:166](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L166)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L170)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceCreateRequest`](QCHubsServiceCreateRequest.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:174](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L174)
