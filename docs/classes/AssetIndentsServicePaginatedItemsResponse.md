[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServicePaginatedItemsResponse

# Class: AssetIndentsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.AssetIndentsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\>

  ↳ **`AssetIndentsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](AssetIndentsServicePaginatedItemsResponse.md#count)
- [offset](AssetIndentsServicePaginatedItemsResponse.md#offset)
- [payload](AssetIndentsServicePaginatedItemsResponse.md#payload)
- [total](AssetIndentsServicePaginatedItemsResponse.md#total)
- [fields](AssetIndentsServicePaginatedItemsResponse.md#fields)
- [runtime](AssetIndentsServicePaginatedItemsResponse.md#runtime)
- [typeName](AssetIndentsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](AssetIndentsServicePaginatedItemsResponse.md#clone)
- [equals](AssetIndentsServicePaginatedItemsResponse.md#equals)
- [fromBinary](AssetIndentsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](AssetIndentsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](AssetIndentsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](AssetIndentsServicePaginatedItemsResponse.md#gettype)
- [toBinary](AssetIndentsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](AssetIndentsServicePaginatedItemsResponse.md#tojson)
- [toJson](AssetIndentsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](AssetIndentsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](AssetIndentsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](AssetIndentsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](AssetIndentsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](AssetIndentsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServicePaginatedItemsResponse**(`data?`): [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;AssetIndentsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1216)

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

[src/asset_indents.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1186)

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

[src/asset_indents.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1196)

___

### payload

• **payload**: [`AssetIndentItem`](AssetIndentItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.AssetIndentItem payload = 4;

#### Defined in

[src/asset_indents.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1214)

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

[src/asset_indents.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1206)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServicePaginatedItemsResponse"``

#### Defined in

[src/asset_indents.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1222)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1242)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1230)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1234)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServicePaginatedItemsResponse`](AssetIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/asset_indents.scailo_pb.ts#L1238)
