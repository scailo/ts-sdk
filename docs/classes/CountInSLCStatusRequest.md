[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CountInSLCStatusRequest

# Class: CountInSLCStatusRequest

Describes the payload for a request to determine the count of records in the given status

**`Generated`**

from message Scailo.CountInSLCStatusRequest

## Hierarchy

- `Message`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

  ↳ **`CountInSLCStatusRequest`**

## Table of contents

### Constructors

- [constructor](CountInSLCStatusRequest.md#constructor)

### Properties

- [isActive](CountInSLCStatusRequest.md#isactive)
- [status](CountInSLCStatusRequest.md#status)
- [fields](CountInSLCStatusRequest.md#fields)
- [runtime](CountInSLCStatusRequest.md#runtime)
- [typeName](CountInSLCStatusRequest.md#typename)

### Methods

- [clone](CountInSLCStatusRequest.md#clone)
- [equals](CountInSLCStatusRequest.md#equals)
- [fromBinary](CountInSLCStatusRequest.md#frombinary)
- [fromJson](CountInSLCStatusRequest.md#fromjson)
- [fromJsonString](CountInSLCStatusRequest.md#fromjsonstring)
- [getType](CountInSLCStatusRequest.md#gettype)
- [toBinary](CountInSLCStatusRequest.md#tobinary)
- [toJSON](CountInSLCStatusRequest.md#tojson)
- [toJson](CountInSLCStatusRequest.md#tojson-1)
- [toJsonString](CountInSLCStatusRequest.md#tojsonstring)
- [equals](CountInSLCStatusRequest.md#equals-1)
- [fromBinary](CountInSLCStatusRequest.md#frombinary-1)
- [fromJson](CountInSLCStatusRequest.md#fromjson-1)
- [fromJsonString](CountInSLCStatusRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CountInSLCStatusRequest**(`data?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Overrides

Message\&lt;CountInSLCStatusRequest\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1609

## Properties

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Denote if only active records need to be returned

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/base.scailo_pb.ts:1600

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The standard lifecycle status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 2;

#### Defined in

src/base.scailo_pb.ts:1607

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1616

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1614

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CountInSLCStatusRequest"``

#### Defined in

src/base.scailo_pb.ts:1615

## Methods

### clone

▸ **clone**(): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

Create a deep copy.

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\>

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
| `a` | `undefined` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |
| `b` | `undefined` \| [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md) \| `PlainMessage`\<[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1633

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

src/base.scailo_pb.ts:1621

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

src/base.scailo_pb.ts:1625

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CountInSLCStatusRequest`](CountInSLCStatusRequest.md)

#### Defined in

src/base.scailo_pb.ts:1629
