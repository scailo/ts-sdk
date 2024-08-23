[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceImageEntryRequest

# Class: OnDutiesServiceImageEntryRequest

Describes the message payload that is necessary to create an entry record. This will most likely be called only from mobile devices.

**`Generated`**

from message Scailo.OnDutiesServiceImageEntryRequest

## Hierarchy

- `Message`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\>

  ↳ **`OnDutiesServiceImageEntryRequest`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceImageEntryRequest.md#constructor)

### Properties

- [entityUuid](OnDutiesServiceImageEntryRequest.md#entityuuid)
- [entryImage](OnDutiesServiceImageEntryRequest.md#entryimage)
- [entryImageMimeType](OnDutiesServiceImageEntryRequest.md#entryimagemimetype)
- [entryLatitude](OnDutiesServiceImageEntryRequest.md#entrylatitude)
- [entryLongitude](OnDutiesServiceImageEntryRequest.md#entrylongitude)
- [userId](OnDutiesServiceImageEntryRequest.md#userid)
- [fields](OnDutiesServiceImageEntryRequest.md#fields)
- [runtime](OnDutiesServiceImageEntryRequest.md#runtime)
- [typeName](OnDutiesServiceImageEntryRequest.md#typename)

### Methods

- [clone](OnDutiesServiceImageEntryRequest.md#clone)
- [equals](OnDutiesServiceImageEntryRequest.md#equals)
- [fromBinary](OnDutiesServiceImageEntryRequest.md#frombinary)
- [fromJson](OnDutiesServiceImageEntryRequest.md#fromjson)
- [fromJsonString](OnDutiesServiceImageEntryRequest.md#fromjsonstring)
- [getType](OnDutiesServiceImageEntryRequest.md#gettype)
- [toBinary](OnDutiesServiceImageEntryRequest.md#tobinary)
- [toJSON](OnDutiesServiceImageEntryRequest.md#tojson)
- [toJson](OnDutiesServiceImageEntryRequest.md#tojson-1)
- [toJsonString](OnDutiesServiceImageEntryRequest.md#tojsonstring)
- [equals](OnDutiesServiceImageEntryRequest.md#equals-1)
- [fromBinary](OnDutiesServiceImageEntryRequest.md#frombinary-1)
- [fromJson](OnDutiesServiceImageEntryRequest.md#fromjson-1)
- [fromJsonString](OnDutiesServiceImageEntryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceImageEntryRequest**(`data?`): [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\> |

#### Returns

[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Overrides

Message\&lt;OnDutiesServiceImageEntryRequest\&gt;.constructor

#### Defined in

src/on_duties.scailo_pb.ts:383

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/on_duties.scailo_pb.ts:342

___

### entryImage

• **entryImage**: `Uint8Array`

The raw image content of the entry image

**`Generated`**

from field: bytes entry_image = 13;

#### Defined in

src/on_duties.scailo_pb.ts:360

___

### entryImageMimeType

• **entryImageMimeType**: `string` = `""`

The MIME type of the entry image

**`Generated`**

from field: string entry_image_mime_type = 14;

#### Defined in

src/on_duties.scailo_pb.ts:367

___

### entryLatitude

• **entryLatitude**: `number` = `0`

The latitude of where the onduty entry was recorded

**`Generated`**

from field: double entry_latitude = 15;

#### Defined in

src/on_duties.scailo_pb.ts:374

___

### entryLongitude

• **entryLongitude**: `number` = `0`

The longiture of where the onduty entry was recorded

**`Generated`**

from field: double entry_longitude = 16;

#### Defined in

src/on_duties.scailo_pb.ts:381

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

// The reference ID of the onduty
string reference_id = 10 [(genesis_validate.rules).string = {
    pattern: "[0-9A-Za-z ]+$", // Allow spaces
}];
The ID of the user who has requested for onduty

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/on_duties.scailo_pb.ts:353

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/on_duties.scailo_pb.ts:390

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/on_duties.scailo_pb.ts:388

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesServiceImageEntryRequest"``

#### Defined in

src/on_duties.scailo_pb.ts:389

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md) \| `PlainMessage`\<[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/on_duties.scailo_pb.ts:411

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:399

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:403

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceImageEntryRequest`](OnDutiesServiceImageEntryRequest.md)

#### Defined in

src/on_duties.scailo_pb.ts:407
