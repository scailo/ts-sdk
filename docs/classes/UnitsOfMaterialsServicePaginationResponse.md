[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServicePaginationResponse

# Class: UnitsOfMaterialsServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.UnitsOfMaterialsServicePaginationResponse

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\>

  ↳ **`UnitsOfMaterialsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServicePaginationResponse.md#constructor)

### Properties

- [count](UnitsOfMaterialsServicePaginationResponse.md#count)
- [offset](UnitsOfMaterialsServicePaginationResponse.md#offset)
- [payload](UnitsOfMaterialsServicePaginationResponse.md#payload)
- [total](UnitsOfMaterialsServicePaginationResponse.md#total)
- [fields](UnitsOfMaterialsServicePaginationResponse.md#fields)
- [runtime](UnitsOfMaterialsServicePaginationResponse.md#runtime)
- [typeName](UnitsOfMaterialsServicePaginationResponse.md#typename)

### Methods

- [clone](UnitsOfMaterialsServicePaginationResponse.md#clone)
- [equals](UnitsOfMaterialsServicePaginationResponse.md#equals)
- [fromBinary](UnitsOfMaterialsServicePaginationResponse.md#frombinary)
- [fromJson](UnitsOfMaterialsServicePaginationResponse.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServicePaginationResponse.md#fromjsonstring)
- [getType](UnitsOfMaterialsServicePaginationResponse.md#gettype)
- [toBinary](UnitsOfMaterialsServicePaginationResponse.md#tobinary)
- [toJSON](UnitsOfMaterialsServicePaginationResponse.md#tojson)
- [toJson](UnitsOfMaterialsServicePaginationResponse.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServicePaginationResponse.md#tojsonstring)
- [equals](UnitsOfMaterialsServicePaginationResponse.md#equals-1)
- [fromBinary](UnitsOfMaterialsServicePaginationResponse.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServicePaginationResponse**(`data?`): [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\> |

#### Returns

[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/units_of_materials.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L666)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/units_of_materials.scailo_pb.ts:636](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L636)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/units_of_materials.scailo_pb.ts:646](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L646)

___

### payload

• **payload**: [`UnitOfMaterial`](UnitOfMaterial.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.UnitOfMaterial payload = 4;

#### Defined in

[src/units_of_materials.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L664)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/units_of_materials.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L656)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_of_materials.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L673)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_of_materials.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L671)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServicePaginationResponse"``

#### Defined in

[src/units_of_materials.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L672)

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_of_materials.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L692)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L680)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L684)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServicePaginationResponse`](UnitsOfMaterialsServicePaginationResponse.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/units_of_materials.scailo_pb.ts#L688)
