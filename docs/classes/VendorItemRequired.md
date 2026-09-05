[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItemRequired

# Class: VendorItemRequired

Represents a vendor item paired with a specific required quantity.
This message encapsulates the base vendor item entity alongside
operational demand metadata, specifying the exact quantity needed.

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

[src/vendors.scailo_pb.ts:3162](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3162)

## Properties

### item

• `Optional` **item**: [`VendorItem`](VendorItem.md)

**`Description`**

The complete vendor item entity containing catalog mappings, pricing configurations, and constraint metadata.

**`Generated`**

from field: Scailo.VendorItem item = 1;

#### Defined in

[src/vendors.scailo_pb.ts:3150](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3150)

___

### requiredQty

• **requiredQty**: `bigint` = `protoInt64.zero`

**`Description`**

The exact quantity of the vendor item that is required, represented in the base currency or measurement subunit (e.g., cents).

**`Example`**

```ts
500
```

**`Generated`**

from field: uint64 required_qty = 10;

#### Defined in

[src/vendors.scailo_pb.ts:3160](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3160)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:3169](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3169)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:3167](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3167)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItemRequired"``

#### Defined in

[src/vendors.scailo_pb.ts:3168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3168)

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

[src/vendors.scailo_pb.ts:3186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3186)

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

[src/vendors.scailo_pb.ts:3174](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3174)

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

[src/vendors.scailo_pb.ts:3178](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3178)

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

[src/vendors.scailo_pb.ts:3182](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L3182)
