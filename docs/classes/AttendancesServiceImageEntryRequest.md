[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesServiceImageEntryRequest

# Class: AttendancesServiceImageEntryRequest

Describes the message payload that is necessary to create an entry record. This will most likely be called only from mobile devices.

**`Generated`**

from message Scailo.AttendancesServiceImageEntryRequest

## Hierarchy

- `Message`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\>

  ↳ **`AttendancesServiceImageEntryRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesServiceImageEntryRequest.md#constructor)

### Properties

- [entityUuid](AttendancesServiceImageEntryRequest.md#entityuuid)
- [entryImage](AttendancesServiceImageEntryRequest.md#entryimage)
- [entryImageMimeType](AttendancesServiceImageEntryRequest.md#entryimagemimetype)
- [entryLatitude](AttendancesServiceImageEntryRequest.md#entrylatitude)
- [entryLongitude](AttendancesServiceImageEntryRequest.md#entrylongitude)
- [userId](AttendancesServiceImageEntryRequest.md#userid)
- [fields](AttendancesServiceImageEntryRequest.md#fields)
- [runtime](AttendancesServiceImageEntryRequest.md#runtime)
- [typeName](AttendancesServiceImageEntryRequest.md#typename)

### Methods

- [clone](AttendancesServiceImageEntryRequest.md#clone)
- [equals](AttendancesServiceImageEntryRequest.md#equals)
- [fromBinary](AttendancesServiceImageEntryRequest.md#frombinary)
- [fromJson](AttendancesServiceImageEntryRequest.md#fromjson)
- [fromJsonString](AttendancesServiceImageEntryRequest.md#fromjsonstring)
- [getType](AttendancesServiceImageEntryRequest.md#gettype)
- [toBinary](AttendancesServiceImageEntryRequest.md#tobinary)
- [toJSON](AttendancesServiceImageEntryRequest.md#tojson)
- [toJson](AttendancesServiceImageEntryRequest.md#tojson-1)
- [toJsonString](AttendancesServiceImageEntryRequest.md#tojsonstring)
- [equals](AttendancesServiceImageEntryRequest.md#equals-1)
- [fromBinary](AttendancesServiceImageEntryRequest.md#frombinary-1)
- [fromJson](AttendancesServiceImageEntryRequest.md#fromjson-1)
- [fromJsonString](AttendancesServiceImageEntryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServiceImageEntryRequest**(`data?`): [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\> |

#### Returns

[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Overrides

Message\&lt;AttendancesServiceImageEntryRequest\&gt;.constructor

#### Defined in

[src/attendances.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L383)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/attendances.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L342)

___

### entryImage

• **entryImage**: `Uint8Array`

The raw image content of the entry image

**`Generated`**

from field: bytes entry_image = 13;

#### Defined in

[src/attendances.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L360)

___

### entryImageMimeType

• **entryImageMimeType**: `string` = `""`

The MIME type of the entry image

**`Generated`**

from field: string entry_image_mime_type = 14;

#### Defined in

[src/attendances.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L367)

___

### entryLatitude

• **entryLatitude**: `number` = `0`

The latitude of where the attendance entry was recorded

**`Generated`**

from field: double entry_latitude = 15;

#### Defined in

[src/attendances.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L374)

___

### entryLongitude

• **entryLongitude**: `number` = `0`

The longiture of where the attendance entry was recorded

**`Generated`**

from field: double entry_longitude = 16;

#### Defined in

[src/attendances.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L381)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

// The reference ID of the attendance
string reference_id = 10 [(buf.validate.field).string = {
    pattern: "[0-9A-Za-z ]+$", // Allow spaces
}];
The ID of the user that this attendance belongs to

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/attendances.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L353)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L390)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L388)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesServiceImageEntryRequest"``

#### Defined in

[src/attendances.scailo_pb.ts:389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L389)

## Methods

### clone

▸ **clone**(): [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

Create a deep copy.

#### Returns

[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md) \| `PlainMessage`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md) \| `PlainMessage`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\> |
| `b` | `undefined` \| [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md) \| `PlainMessage`\<[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L411)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L399)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L403)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServiceImageEntryRequest`](AttendancesServiceImageEntryRequest.md)

#### Defined in

[src/attendances.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L407)
