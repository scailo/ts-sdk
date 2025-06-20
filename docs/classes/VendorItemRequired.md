[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItemRequired

# Class: VendorItemRequired

Describes the vendor item that also stores the quantity that is required

**`Generated`**

from message Scailo.VendorItemRequired

## Hierarchy

- `Message`\<[`VendorItemRequired`](VendorItemRequired.md)\>

  ↳ **`VendorItemRequired`**

## Table of contents

### Constructors

- [constructor](VendorItemRequired.md#constructor)

### Properties

- [item](VendorItemRequired.md#item)
- [requiredQty](VendorItemRequired.md#requiredqty)
- [fields](VendorItemRequired.md#fields)
- [runtime](VendorItemRequired.md#runtime)
- [typeName](VendorItemRequired.md#typename)

### Methods

- [clone](VendorItemRequired.md#clone)
- [equals](VendorItemRequired.md#equals)
- [fromBinary](VendorItemRequired.md#frombinary)
- [fromJson](VendorItemRequired.md#fromjson)
- [fromJsonString](VendorItemRequired.md#fromjsonstring)
- [getType](VendorItemRequired.md#gettype)
- [toBinary](VendorItemRequired.md#tobinary)
- [toJSON](VendorItemRequired.md#tojson)
- [toJson](VendorItemRequired.md#tojson-1)
- [toJsonString](VendorItemRequired.md#tojsonstring)
- [equals](VendorItemRequired.md#equals-1)
- [fromBinary](VendorItemRequired.md#frombinary-1)
- [fromJson](VendorItemRequired.md#fromjson-1)
- [fromJsonString](VendorItemRequired.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorItemRequired**(`data?`): [`VendorItemRequired`](VendorItemRequired.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorItemRequired`](VendorItemRequired.md)\> |

#### Returns

[`VendorItemRequired`](VendorItemRequired.md)

#### Overrides

Message\&lt;VendorItemRequired\&gt;.constructor

#### Defined in

src/vendors.scailo_pb.ts:1972

## Properties

### item

• `Optional` **item**: [`VendorItem`](VendorItem.md)

The applicable vendor item

**`Generated`**

from field: Scailo.VendorItem item = 1;

#### Defined in

src/vendors.scailo_pb.ts:1963

___

### requiredQty

• **requiredQty**: `bigint` = `protoInt64.zero`

The quantity that is required

**`Generated`**

from field: uint64 required_qty = 10;

#### Defined in

src/vendors.scailo_pb.ts:1970

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:1979

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:1977

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItemRequired"``

#### Defined in

src/vendors.scailo_pb.ts:1978

## Methods

### clone

▸ **clone**(): [`VendorItemRequired`](VendorItemRequired.md)

Create a deep copy.

#### Returns

[`VendorItemRequired`](VendorItemRequired.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorItemRequired`](VendorItemRequired.md) \| `PlainMessage`\<[`VendorItemRequired`](VendorItemRequired.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorItemRequired`](VendorItemRequired.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorItemRequired`](VendorItemRequired.md)\>

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
| `a` | `undefined` \| [`VendorItemRequired`](VendorItemRequired.md) \| `PlainMessage`\<[`VendorItemRequired`](VendorItemRequired.md)\> |
| `b` | `undefined` \| [`VendorItemRequired`](VendorItemRequired.md) \| `PlainMessage`\<[`VendorItemRequired`](VendorItemRequired.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendors.scailo_pb.ts:1996

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorItemRequired`](VendorItemRequired.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorItemRequired`](VendorItemRequired.md)

#### Defined in

src/vendors.scailo_pb.ts:1984

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorItemRequired`](VendorItemRequired.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItemRequired`](VendorItemRequired.md)

#### Defined in

src/vendors.scailo_pb.ts:1988

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorItemRequired`](VendorItemRequired.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItemRequired`](VendorItemRequired.md)

#### Defined in

src/vendors.scailo_pb.ts:1992
