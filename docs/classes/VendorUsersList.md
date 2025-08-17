[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorUsersList

# Class: VendorUsersList

Describes the message consisting of the list of vendor users

**`Generated`**

from message Scailo.VendorUsersList

## Hierarchy

- `Message`\<[`VendorUsersList`](VendorUsersList.md)\>

  ↳ **`VendorUsersList`**

## Table of contents

### Constructors

- [constructor](VendorUsersList.md#constructor)

### Properties

- [list](VendorUsersList.md#list)
- [fields](VendorUsersList.md#fields)
- [runtime](VendorUsersList.md#runtime)
- [typeName](VendorUsersList.md#typename)

### Methods

- [clone](VendorUsersList.md#clone)
- [equals](VendorUsersList.md#equals)
- [fromBinary](VendorUsersList.md#frombinary)
- [fromJson](VendorUsersList.md#fromjson)
- [fromJsonString](VendorUsersList.md#fromjsonstring)
- [getType](VendorUsersList.md#gettype)
- [toBinary](VendorUsersList.md#tobinary)
- [toJSON](VendorUsersList.md#tojson)
- [toJson](VendorUsersList.md#tojson-1)
- [toJsonString](VendorUsersList.md#tojsonstring)
- [equals](VendorUsersList.md#equals-1)
- [fromBinary](VendorUsersList.md#frombinary-1)
- [fromJson](VendorUsersList.md#fromjson-1)
- [fromJsonString](VendorUsersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorUsersList**(`data?`): [`VendorUsersList`](VendorUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorUsersList`](VendorUsersList.md)\> |

#### Returns

[`VendorUsersList`](VendorUsersList.md)

#### Overrides

Message\&lt;VendorUsersList\&gt;.constructor

#### Defined in

src/vendors.scailo_pb.ts:2376

## Properties

### list

• **list**: [`VendorUser`](VendorUser.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorUser list = 1;

#### Defined in

src/vendors.scailo_pb.ts:2374

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:2383

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:2381

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorUsersList"``

#### Defined in

src/vendors.scailo_pb.ts:2382

## Methods

### clone

▸ **clone**(): [`VendorUsersList`](VendorUsersList.md)

Create a deep copy.

#### Returns

[`VendorUsersList`](VendorUsersList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorUsersList`](VendorUsersList.md) \| `PlainMessage`\<[`VendorUsersList`](VendorUsersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorUsersList`](VendorUsersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorUsersList`](VendorUsersList.md)\>

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
| `a` | `undefined` \| [`VendorUsersList`](VendorUsersList.md) \| `PlainMessage`\<[`VendorUsersList`](VendorUsersList.md)\> |
| `b` | `undefined` \| [`VendorUsersList`](VendorUsersList.md) \| `PlainMessage`\<[`VendorUsersList`](VendorUsersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendors.scailo_pb.ts:2399

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorUsersList`](VendorUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorUsersList`](VendorUsersList.md)

#### Defined in

src/vendors.scailo_pb.ts:2387

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorUsersList`](VendorUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersList`](VendorUsersList.md)

#### Defined in

src/vendors.scailo_pb.ts:2391

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorUsersList`](VendorUsersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersList`](VendorUsersList.md)

#### Defined in

src/vendors.scailo_pb.ts:2395
