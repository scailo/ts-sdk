[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCreateRequest

# Class: LocationsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LocationsServiceCreateRequest

## Hierarchy

- `Message`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

  ↳ **`LocationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceCreateRequest.md#constructor)

### Properties

- [code](LocationsServiceCreateRequest.md#code)
- [email](LocationsServiceCreateRequest.md#email)
- [entityUuid](LocationsServiceCreateRequest.md#entityuuid)
- [formData](LocationsServiceCreateRequest.md#formdata)
- [name](LocationsServiceCreateRequest.md#name)
- [phone](LocationsServiceCreateRequest.md#phone)
- [userComment](LocationsServiceCreateRequest.md#usercomment)
- [fields](LocationsServiceCreateRequest.md#fields)
- [runtime](LocationsServiceCreateRequest.md#runtime)
- [typeName](LocationsServiceCreateRequest.md#typename)

### Methods

- [clone](LocationsServiceCreateRequest.md#clone)
- [equals](LocationsServiceCreateRequest.md#equals)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary)
- [fromJson](LocationsServiceCreateRequest.md#fromjson)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring)
- [getType](LocationsServiceCreateRequest.md#gettype)
- [toBinary](LocationsServiceCreateRequest.md#tobinary)
- [toJSON](LocationsServiceCreateRequest.md#tojson)
- [toJson](LocationsServiceCreateRequest.md#tojson-1)
- [toJsonString](LocationsServiceCreateRequest.md#tojsonstring)
- [equals](LocationsServiceCreateRequest.md#equals-1)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary-1)
- [fromJson](LocationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceCreateRequest**(`data?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Overrides

Message\&lt;LocationsServiceCreateRequest\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:158

## Properties

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/locations.scailo_pb.ts:135

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 12;

#### Defined in

src/locations.scailo_pb.ts:142

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/locations.scailo_pb.ts:114

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/locations.scailo_pb.ts:156

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

src/locations.scailo_pb.ts:128

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 13;

#### Defined in

src/locations.scailo_pb.ts:149

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/locations.scailo_pb.ts:121

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:165

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:163

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCreateRequest"``

#### Defined in

src/locations.scailo_pb.ts:164

## Methods

### clone

▸ **clone**(): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:187

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

src/locations.scailo_pb.ts:175

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

src/locations.scailo_pb.ts:179

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

src/locations.scailo_pb.ts:183
